const app = require("./app");
const PORT = process.env.PORT || 9000;
const path = require("path");
const cors = require("cors");

app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
