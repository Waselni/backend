const tableName = 'user';

/**
 * @see https://knexjs.org
 */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments(); // id column
    table.string('name').notNullable();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.string('user_type').notNullable();
    table.string('email').notNullable();
    table.string('phone_number').notNullable();
    table.string('license_id').nullable();

    table.timestamps(true, true);

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
