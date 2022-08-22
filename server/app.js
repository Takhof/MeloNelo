const express = require("express");
const app = express();
const database = require("./knex");
const path = require("path");
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("We did it!");
});

app.get("/api/test", (req, res) => {
  database("performance")
    .select()
    .then((result) => {
      res.send(result);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

module.exports = app;
