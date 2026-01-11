import {
  listarAgendaPorData,
  cancelarConsulta,
} from "../services/agendaService.js";

const tabela = document.getElementById("tabela-agenda");
const inputData = document.getElementById("data");
const btnFiltrar = document.getElementById("btn-filtrar");

function limparTabela() {
  tabela.innerHTML = "";
}

function carregarAgenda(data) {
  limparTabela();

  const agenda = listarAgendaPorData(data);

  if (agenda.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="3">Nenhuma consulta para esta data</td>
      </tr>
    `;
    return;
  }

  agenda.forEach((consulta) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${consulta.horario}</td>
      <td>${consulta.paciente}</td>
      <td>
        <button onclick="cancelar(${consulta.id})">Cancelar</button>
      </td>
    `;

    tabela.appendChild(tr);
  });
}

btnFiltrar.addEventListener("click", () => {
  if (!inputData.value) {
    alert("Selecione uma data");
    return;
  }
  carregarAgenda(inputData.value);
});

window.cancelar = function (id) {
  cancelarConsulta(id);
  alert("Consulta cancelada!");
};
