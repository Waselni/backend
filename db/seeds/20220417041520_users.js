const bcrypt = require('bcrypt');

/**
 *
 * @param {string} password
 * @returns {string}
 */
function hashPassword(password) {
  return bcrypt.hashSync(password, 12);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del();

  const { count } = await knex('user').count('*', { as: 'count' }).first();

  if (count === 0) {
    await knex('user').insert([
      {
        name: 'admin',
        username: 'admin',
        user_type: 'admin',
        email: 'admin@waselni.com',
        phone_number: '0599111333',
        password: hashPassword('@admin##1122'),
      },
      {
        name: 'driver rami',
        username: 'driver',
        user_type: 'driver',
        email: 'driver@waselni.com',
        phone_number: '0599111222',
        password: hashPassword('@driver##1122'),
      },
      {
        name: 'passenger natour',
        username: 'passenger',
        user_type: 'passenger',
        email: 'passenger@waselni.com',
        phone_number: '0599333444',
        password: hashPassword('@passenger##1122'),
      },
    ]);
  }
};
