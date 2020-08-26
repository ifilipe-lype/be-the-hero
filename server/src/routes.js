const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json({
        evento: "Semana omnistack 11.0",
        aluno: "iFilipe Lype"
    });
})

module.exports = routes;