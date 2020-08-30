const express = require("express");
const { errors } = require("celebrate");
const cors = require("cors");

const routes = require("./routes");

const app = express();

// allow the app to exchange data through JSON
app.use(express.json());

// allow all request from others client, development only.
app.use(cors());

// setting up routes
app.use(routes);

// setup erros handler for celebrate
app.use(errors());

module.exports = app;
