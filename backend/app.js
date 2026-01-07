const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuario.routes");

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

// ROTAS DE USUÁRIO
app.use("/usuario", usuarioRoutes);

// PORTA DO SERVIDOR
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
