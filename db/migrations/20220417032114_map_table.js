const tableName = 'map';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('path').notNullable();

    table.integer('route_id').unsigned().notNullable();

    table
      .foreign('route_id', 'route_id_map_fk_idx')
      .references('id')
      .inTable('route')
      .onDelete('CASCADE');

    table.engine('InnoDB');
    table.charset('utf8mb3');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
