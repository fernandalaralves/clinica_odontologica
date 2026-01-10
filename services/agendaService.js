const agendaMock = [
  { id: 1, horario: "08:00", paciente: "Maria Silva" },
  { id: 2, horario: "09:00", paciente: "João Souza" },
  { id: 3, horario: "10:00", paciente: "Ana Lima" },
];

function listarAgenda() {
  return agendaMock;
}

function cancelarConsulta(id) {
  console.log("Consulta cancelada:", id);
}

//depois trocamos por fetch para conectar com o back end
export { listarAgenda, cancelarConsulta };
