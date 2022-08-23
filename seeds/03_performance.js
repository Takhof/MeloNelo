/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("performance").del();
  await knex("performance").insert([
    {
      id: 1,
      performer_id: 1,
      title: "Rockin Your Day",
      remaining_seats: 5,
      price: 4000,
      description: `Time to rock at Andy's house! Come visit me at August 29!`,
    },
    {
      id: 2,
      performer_id: 2,
      title: "Light Mozart",
      remaining_seats: 500,
      price: 2500,
      description: "Lovely Piano Performance at Jon's Afternoon Tea.",
    },
    {
      id: 3,
      performer_id: 2,
      title: `A French Evening`,
      remaining_seats: 50,
      price: 1500,
      description:
        "A concert filled with French Composers including Debussy, Ravel, and more at Tokyo Dome.",
    },
  ]);
};
