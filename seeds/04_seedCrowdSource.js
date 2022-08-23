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
      supportprice: 1000,
      CSdescription: "Tomato's first concert! Support Tomato now!",
    },
    {
      id: 2,
      performer_id: 5,
      title: "Beethoven's first recital",
      remaining_goal: 12000,
      supportprice: 2000,
      CSdescription: "I am poor and need money to perform. Please help!",
    },
    {
      id: 3,
      performer_id: 3,
      title: "MP's dance dance dance",
      remaining_goal: 12000,
      supportprice: 2000,
      CSdescription: "COME SEE ME LEAN 45 DEGREES!",
    },
    {
      id: 4,
      performer_id: 6,
      title: "TAKASHI",
      remaining_goal: 500000000,
      supportprice: 2000000,
      CSdescription: "The Voice That Will Never Leave You.",
    },
  ]);
};
