const app = require("./app");
const PORT = process.env.PORT || 9000;
const database = require("./knex");

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
