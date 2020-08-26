const express = require("express");

const OngController = require("./controllers/OngController");
const routes = express.Router();

// list all created ongs
routes.get("/ongs", OngController.index);

// create a new ong
routes.post("/ongs", OngController.create);

module.exports = routes;