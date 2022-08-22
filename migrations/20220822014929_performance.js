/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    await knex.schema.createTable('performance', table => {
        table.increments("id");
        table.integer("performer_id").notNullable();
        table.foreign("performer_id").references("performers.id");
        table.integer("user_id").notNullable();
        table.foreign("user_id").references("users.id")
        table.integer("remaining_goal").notNullable();
        table.timestamp("created_at", { useTz: false })
             .defaultTo(knex.fn.now());
        table.timestamp("updated_at", { useTz: false });
        table.string("title").notNullable();
        table.string("description", 500)
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
