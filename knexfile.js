const path = require('path');
const { config, validate } = require('./config');

validate({
  database: {
    host: String,
    user: String,
    name: String,
    password: String,
    port: Number,
  },
});

const { host, port, user, password, name } = config.database;

/**
 * @type { import("knex").Knex.Config }
 */
module.exports = {
  client: 'mysql2',
  connection: {
    database: name,
    host,
    port,
    user,
    password,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
    directory: path.join(__dirname, 'db', 'migrations'),
  },
  seeds: {
    directory: path.join(__dirname, 'db', 'seeds'),
    timestampFilenamePrefix: true,
  },
};
