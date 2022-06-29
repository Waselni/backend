/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.alterTable('trip', (table) => {
      table.dropColumn('end_at');
      table.dropColumn('status');
      table.float('source').notNullable();
      table.float('destination').notNullable();
      table.string('duration').notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.alterTable('trip', (table) => {
        table.datetime('end_at').notNullable();
        table.string('status').notNullable();
        table.dropColumn('source');
        table.dropColumn('destination');
      table.dropColumn('duration');
    });
  };
  