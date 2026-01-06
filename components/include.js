function carregarComponente(id, arquivo) {
  fetch(arquivo)
    .then((res) => res.text())
    .then((html) => (document.getElementById(id).innerHTML = html));
}

carregarComponente("header", "../components/header.html");
carregarComponente("footer", "../components/footer.html");
