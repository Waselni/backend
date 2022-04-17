const tableName = 'trip_passengers';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.integer('passenger_id').unsigned().notNullable();
    table.integer('trip_id').unsigned().notNullable();

    table
      .foreign('passenger_id', 'passenger_id_trip_passengers_fk_idx')
      .references('id')
      .inTable('user')
      .onDelete('CASCADE');

    table
      .foreign('trip_id', 'trip_id_trip_passengers_fk_idx')
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
