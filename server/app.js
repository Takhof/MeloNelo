const express = require("express");
const app = express();
const database = require("./knex");

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("We did it!");
});
//awef
app.get("/api/test", (req, res) => {
  database("performance")
    .select()
    .then((result) => {
      res.send(result);
    });
});

module.exports = app;
