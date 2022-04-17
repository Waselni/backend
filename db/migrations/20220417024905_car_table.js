const tableName = 'car';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.integer('seats').notNullable();

    table.specificType('year_of_production', 'YEAR').notNullable();
    table.string('manufacturer').notNullable();
    table.string('plate_number', 31).notNullable();
    table.string('model').notNullable();
    table.string('color').notNullable();
    table.string('car_license').notNullable();

    table.integer('driver_id').unsigned().notNullable();

    table
      .foreign('driver_id', 'driver_id_car_fk_idx')
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
