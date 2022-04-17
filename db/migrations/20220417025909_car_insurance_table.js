const tableName = 'car_insurance';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.datetime('expire_date').notNullable();
    table.datetime('start_date').notNullable();
    table.string('company_name').notNullable();

    table.integer('car_id').unsigned().notNullable();

    table
      .foreign('car_id', 'car_id_insurance_idx')
      .references('id')
      .inTable('car')
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
