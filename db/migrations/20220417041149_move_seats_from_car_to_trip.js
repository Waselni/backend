/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .alterTable('car', (table) => {
      table.dropColumn('seats');
    })
    .alterTable('trip', (table) => {
      table.integer('seats').unsigned().notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable('car', (table) => {
      table.integer('seats').notNullable();
    })
    .alterTable('trip', (table) => {
      table.dropColumn('seats');
    });
};
