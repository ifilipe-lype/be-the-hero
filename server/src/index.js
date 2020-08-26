const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.json({
        evento: "Semana omnistack 11.0",
        aluno: "iFilipe Lype"
    });
})

app.listen(3333);
