// Criar uma API de um projeto do tipo CRUD em NodeJS com classes, rotas, crontrollers e middlewares.

const express = require("express");
require('dotenv').config()

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mensage: "API de pedidos!" });
});

require("./src/routes/pedidos.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}.`);
});




