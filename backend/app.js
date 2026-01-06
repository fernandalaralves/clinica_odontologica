const express = require("express");
const cors = require("cors");

const app = express();

// CONFIGURAÇÕES BÁSICAS
app.use(cors());
app.use(express.json());

// ROTA DE TESTE
app.get("/status", (req, res) => {
  res.json({
    status: "Servidor rodando",
    message: "Back-end da Clínica Odontológica está ativo!",
  });
});

// PORTA DO SERVIDOR
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
