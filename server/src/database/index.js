const knex = require("knex");
const config = require("../../knexfile");

const configToUse = process.env.NODE_ENV === "test" ? config.test : config.development;

const connection = knex(configToUse);

module.exports = connection;
