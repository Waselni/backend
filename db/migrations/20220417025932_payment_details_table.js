const tableName = 'payment_details';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments(); // id
    table.float('price').notNullable();
    table.integer('method', 1).unsigned().notNullable();

    table.integer('payment_id').unsigned().notNullable();

    table
      .foreign('payment_id', 'payment_id_payment_details_idx')
      .references('id')
      .inTable('payment')
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
