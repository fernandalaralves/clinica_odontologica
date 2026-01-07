//verifica se o usuario existe
//VALIDA LOGIN
//decide o que pode ser feito

const Usuario = require("../models/usuario");
const UsuarioRepository = require("../repositories/UsuarioRepository");

function cadastrar(dados) {
  const usuarioExistente = UsuarioRepository.buscarPorEmail(dados.email);

  if (usuarioExistente) {
    throw new Error("Usuário já cadastrado");
  }

  const usuario = new Usuario(dados);
  return UsuarioRepository.salvar(usuario);
}

function login(email, senha) {
  const usuario = UsuarioRepository.buscarPorEmail(email);

  if (!usuario || usuario.senha !== senha) {
    throw new Error("Email ou senha inválidos");
  }

  return usuario;
}

module.exports = {
  cadastrar,
  login,
};
