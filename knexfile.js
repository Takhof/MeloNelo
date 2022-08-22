require("dotenv").config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "postgres",
  connection: {
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
  },
  searchPath: "public",
  migrations: {
    directory: __dirname + "/migrations",
  },
  seeds: {
    directory: __dirname + "/seeds",
  },
  development: {
    client: "pg",
    connection: {
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
    },
    searchPath: "public",
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },

  staging: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/melonelo`,
    searchPath: "public",
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      connectionString:
        process.env.DATABASE_URL ||
        `postgres://${process.env.USER}@127.0.0.1:5432/melonelo`,
      ssl: { rejectUnauthorized: false },
    },
    searchPath: "public",
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};
