const agenda = JSON.parse(localStorage.getItem("agenda")) || {};
const tabela = document.getElementById("tabela");

for (let dia in agenda) {
  agenda[dia].forEach((horario) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${dia}</td>
      <td>${horario}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="cancelar(${dia}, '${horario}')">
          Cancelar
        </button>
      </td>
    `;

    tabela.appendChild(tr);
  });
}

function cancelar(dia, horario) {
  agenda[dia].push(horario);
  localStorage.setItem("agenda", JSON.stringify(agenda));
  location.reload();
}
