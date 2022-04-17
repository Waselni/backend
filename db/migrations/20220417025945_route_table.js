const tableName = 'route';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('source').notNullable();
    table.string('destination').notNullable();

    table.integer('trip_id').unsigned().notNullable();

    table
      .foreign('trip_id', 'trip_id_route_fk_idx')
      .references('id')
      .inTable('trip')
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
