// CONTROLE DE USUÁRIO
const logado = localStorage.getItem("logado") === "true";
const tipoUsuario = localStorage.getItem("tipo"); // cliente | dentista

// AGENDA (COM PERSISTÊNCIA)
let agenda = JSON.parse(localStorage.getItem("agenda")) || {
  1: ["09:00", "10:00"],
  2: ["08:00", "11:00"],
  3: ["09:00"],
  5: [], // dia bloqueado
  10: ["14:00", "15:00"],
};

// ESTADO

let diaSelecionado = null;
let horarioSelecionado = null;

// ELEMENTOS

const horariosDiv = document.getElementById("horarios");
const tituloHorarios = document.getElementById("tituloHorarios");

const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));

const modalConfirmacao = new bootstrap.Modal(
  document.getElementById("modalConfirmacao")
);

const textoConfirmacao = document.getElementById("textoConfirmacao");

// SELECIONAR DIA

function selecionarDia(dia, elemento) {
  document
    .querySelectorAll(".day")
    .forEach((d) => d.classList.remove("btn-primary"));
  elemento.classList.add("btn-primary");

  diaSelecionado = dia;
  horariosDiv.innerHTML = "";
  tituloHorarios.innerText = `Horários disponíveis – Dia ${dia}`;

  if (!agenda[dia] || agenda[dia].length === 0) {
    horariosDiv.innerHTML =
      "<p class='text-muted'>Nenhum horário disponível neste dia.</p>";
    return;
  }

  agenda[dia].forEach((horario) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary m-1";
    btn.innerText = horario;

    btn.onclick = () => selecionarHorario(horario);

    horariosDiv.appendChild(btn);
  });
}

// SELECIONAR HORÁRIO
function selecionarHorario(horario) {
  if (!logado) {
    modalLogin.show();
    return;
  }

  if (tipoUsuario === "dentista") {
    alert("Dentistas não realizam agendamentos.");
    return;
  }

  horarioSelecionado = horario;

  textoConfirmacao.innerText = `Confirmar consulta no dia ${diaSelecionado} às ${horario}?`;

  modalConfirmacao.show();
}

// CONFIRMAR AGENDAMENTO

function confirmar() {
  // Remove horário do dia
  agenda[diaSelecionado] = agenda[diaSelecionado].filter(
    (h) => h !== horarioSelecionado
  );

  // Salva no localStorage
  localStorage.setItem("agenda", JSON.stringify(agenda));

  modalConfirmacao.hide();

  // Atualiza a tela
  selecionarDia(
    diaSelecionado,
    document.querySelector(`[data-dia='${diaSelecionado}']`)
  );
}
