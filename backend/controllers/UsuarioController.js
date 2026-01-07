//recebe o req e o res

const UsuarioService = require("../services/UsuarioService");

function cadastrar(req, res) {
  try {
    const usuario = UsuarioService.cadastrar(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

function login(req, res) {
  try {
    const { email, senha } = req.body;
    const usuario = UsuarioService.login(email, senha);
    res.json(usuario);
  } catch (error) {
    res.status(401).json({ erro: error.message });
  }
}

module.exports = {
  cadastrar,
  login,
};
