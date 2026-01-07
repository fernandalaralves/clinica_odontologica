// simulação de banco de dados
//NÃO VALIDA, SÓ GUARDA E BUSCA
const usuarios = [];

function salvar(usuario) {
  usuarios.push(usuario);
  return usuario;
}

function buscarPorEmail(email) {
  return usuarios.find((u) => u.email === email);
}

function listar() {
  return usuarios;
}

module.exports = {
  salvar,
  buscarPorEmail,
  listar,
};
