/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Andy",
      password: "Andy123",
      description: "I am Andy. I teach.",
    },
    { id: 2, name: "Sergei", password: "Sergei123", description: "Sergei." },
    { id: 3, name: "TAKASHI", password: "Takashi123", description: "TAKASHI" },
  ]);
};
