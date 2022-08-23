const app = require("./app");
const PORT = process.env.PORT || 5000;
const path = require("path");
const express = require("express");

app.use(express.static(path.join(__dirname, "../build")));

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
