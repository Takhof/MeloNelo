/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    {
      id: 1,
      performer_id: 1,
      user_id: 1,
      title: "Rockin Your Day",
      remaining_goal: 3000,
      description: `Time to rock at Andy's house! Come visit me at August 29!`,
    },
    {
      id: 2,
      performer_id: 2,
      user_id: 2,
      title: "Light Mozart",
      remaining_goal: 5000,
      description: "Lovely Afternoon Tea, hosted at Jon's apartment.",
    },
    {
      id: 3,
      performer_id: 2,
      user_id: 1,
      title: `A French Evening`,
      remaining_goal: 2000,
      description:
        "A concert filled with French Composers including Debussy, Ravel, and more.",
    },
    {
      id: 4,
      performer_id: 3,
      user_id: 1,
      title: "WOAH!",
      remaining_goal: 9000,
      description: "YEEHAW!",
    },
    {
      id: 5,
      performer_id: 3,
      user_id: 1,
      title: "LEANING SIDEWAYS",
      remaining_goal: 12000,
      description: "MUUUUSICCC",
    },
  ]);
};
