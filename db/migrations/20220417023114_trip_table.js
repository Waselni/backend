const tableName = 'trip';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.datetime('start_at').notNullable();
    table.datetime('end_at').notNullable();
    table.string('status').notNullable();
    table.float('distance').notNullable();

    table.integer('driver_id').unsigned().notNullable();

    table
      .foreign('driver_id', 'driver_id_trip_fk_idx')
      .references('id')
      .inTable('user')
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
