import { listarUsuarios } from "../../services/usuarioService";

const lista = document.getElementById("lista-usuarios");

function carregarUsuarios() {
  const usuarios = listarUsuarios();

  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = `${usuario.nome} - ${usuario.email}`;
    lista.appendChild(li);
  });
}

carregarUsuarios();
