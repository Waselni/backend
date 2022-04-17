const tableName = 'reviews';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.integer('rate').notNullable();

    table.integer('passenger_id').unsigned().notNullable();
    table.integer('driver_id').unsigned().notNullable();

    table
      .foreign('passenger_id', 'passenger_id_reviews_fk_idx')
      .references('id')
      .inTable('user')
      .onDelete('CASCADE');

    table
      .foreign('driver_id', 'driver_id_reviews_fk_idx')
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
