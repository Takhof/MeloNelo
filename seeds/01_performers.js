/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("crowdsource").del();
  await knex("performance").del();
  await knex("users").del();
  await knex("performers").del();
  await knex("performers").insert([
    {
      id: 1,
      name: "Elvis Presley",
      password: "Elvis123",
      pricehour: "9000",
      description: "I am the King of Rock. I will change your life!",
    },
    {
      id: 2,
      name: "Martha Argerich",
      password: "Martha123",
      pricehour: "10000",
      description: "I play the piano. I am pretty dang good.",
    },
    {
      id: 3,
      name: "Michael Paxton",
      password: "Michael123",
      pricehour: "400000",
      description: "OH YEAH!",
    },
    {
      id: 4,
      name: "Tomato",
      password: "Tomato123",
      pricehour: "50",
      description: "Cool Guy",
    },
    {
      id: 5,
      name: "Beethoven",
      password: "Beethoven123",
      pricehour: "400000",
      description: "Piano",
    },
    {
      id: 6,
      name: "TAKASHI",
      password: "Takashi123",
      pricehour: "1000000",
      description: "The sound of the gods",
    },
  ]);
};
