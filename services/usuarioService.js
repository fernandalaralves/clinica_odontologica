//SIMULAÇÃO DE DADOS (AINDA NÃO ESTÁ CONECTADO AO BACK END)

const usuariosMock = [
  { id: 1, nome: "Ana", email: "ana@gmail.com" },
  { id: 2, nome: "João Silva", email: "joao@gmail.com" },
];

function listarUsuarios() {
  return usuariosMock;
}

//depois trocamos por fetch para conectar com o back end
export { listarUsuarios };
