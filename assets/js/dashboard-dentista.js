import { listarAgenda } from "../../services/agendaService.js";

const tabela = document.getElementById("tabela-agenda");

function carregarAgenda() {
  const agenda = listarAgenda();

  agenda.forEach((consulta) => {
    const tr = document.createElement("tr");

    // Preenchendo a linha da tabela com os dados da consulta

    tr.innerHTML = `
      <td>${consulta.horario}</td>
      <td>${consulta.paciente}</td>
      <td>
        <button onclick="cancelarConsulta(${consulta.id})">Cancelar</button>
      </td>
    `;

    tabela.appendChild(tr);
  });
}

// Função para cancelar consulta (simulação)

window.cancelar = function (id) {
  cancelarConsulta(id);
  alert("Consulta cancelada com sucesso!");
};

carregarAgenda();
