//ainda sem lógica estrutura básica do model usuario
class Usuario {
  constructor({ nome, email, senha, tipo }) {
    this.id = Date.now(); // id simples
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.tipo = tipo; // "paciente" ou "dentista"
  }
}

module.exports = Usuario;
