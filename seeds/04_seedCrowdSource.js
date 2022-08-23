/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("crowdsource").insert([
    {
      id: 1,
      performer_id: 4,
      title: "Tomato's Violin",
      remaining_goal: 8000,
      description: "Tomato's first concert! Support Tomato now!",
    },
    {
      id: 2,
      performer_id: 5,
      title: "Beethoven's first recital",
      remaining_goal: 12000,
      description: "I am poor and need money to perform. Please help!",
    },
    {
      id: 3,
      performer_id: 3,
      title: "DAY OF MJ",
      remaining_goal: 12000,
      description: "COME SEE ME LEAN 45 DEGREES!",
    },
  ]);
};
