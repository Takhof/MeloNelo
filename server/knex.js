const knex = require("knex");
const config = require("../knexfile");
let database = knex(config);
//test
module.exports = database;
