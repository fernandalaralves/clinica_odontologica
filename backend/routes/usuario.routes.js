//post usuario/cadastro
//post usuario/login

const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const router = express.Router();

router.post("/cadastro", UsuarioController.cadastrar);
router.post("/login", UsuarioController.login);

module.exports = router;
