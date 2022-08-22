const knex = require("knex");
const config = require("../knexfile");
let database = knex(config);

module.exports = database;
