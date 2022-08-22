const express = require("express");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("We did it!");
});

module.exports = app;
