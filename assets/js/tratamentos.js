function agendar(tratamento) {
  localStorage.setItem("tratamentoSelecionado", tratamento);
  window.location.href = "agenda.html";
}
