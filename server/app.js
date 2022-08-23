const express = require("express");
const app = express();
const database = require("./knex");

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("We did it!");
});

app.get("/api/performers", (req, res) => {
  database("performers")
    .select()
    .then((result) => {
      res.send(result);
    });
});

app.get("/api/performance", (req, res) => {
  database("performance")
    .select()
    .then((result) => {
      res.send(result);
    });
});

app.get("/api/crowdsource", (req, res) => {
  database("crowdsource")
    .join("performers", "performers.id", "crowdsource.performer_id")
    .select("name as performer", "title", "crowdsource.id")
    .then((result) => {
      res.send(result);
    });
});

app.get("/api/crowdsource/:id", (req, res) => {
  id = req.params.id;
  database("crowdsource")
    .join("performers", "performers.id", "crowdsource.performer_id")
    .where("crowdsource.id", id)
    .select("name", "title", "remaining_goal", "description")
    .then((result) => {
      res.send(result);
    });
});

module.exports = app;
