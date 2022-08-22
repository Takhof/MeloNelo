const { tab } = require("@testing-library/user-event/dist/tab");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("performers", (table) => {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("password", 72).notNullable();
    table.integer("pricehour").notNullable();
    table.timestamp("created_at", { useTz: false }).defaultTo(knex.fn.now());
    table.timestamp("updated_at", { useTz: false });
    table.string("description", 500);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("performers");
};
