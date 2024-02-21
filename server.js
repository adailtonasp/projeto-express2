const express = require("express");

const app = express();

// Habilita o envio de json no body de requisições
app.use(express.json());


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}.`);
});




