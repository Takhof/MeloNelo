const database = require("./knex");

module.exports = {
  updateRemaining: function (data) {
    console.log("data", data);
    return database("crowdsource")
      .where({ id: data.id })
      .update({
        remaining_goal: database.raw("remaining_goal - ?", data.price),
      });
  },
};
