const agendaMock = [
  { id: 1, data: "2026-01-08", horario: "08:00", paciente: "Maria Silva" },
  { id: 2, data: "2026-01-08", horario: "09:00", paciente: "João Souza" },
  { id: 3, data: "2026-01-09", horario: "10:00", paciente: "Ana Lima" },
];

function listarAgendaPorData(dataSelecionada) {
  return agendaMock.filter((c) => c.data === dataSelecionada);
}

function cancelarConsulta(id) {
  console.log("Consulta cancelada:", id);
}

export { listarAgendaPorData, cancelarConsulta };
