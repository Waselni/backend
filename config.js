const { env } = require('process');
const { ascertain } = require('ascertain');

const config = {
  app: {
    env: env.NODE_ENV || 'development',
    port: Number(env.PORT),
  },
  database: {
    host: env.MYSQL_DB_HOST,
    port: Number(env.MYSQL_DB_PORT),
    user: env.MYSQL_DB_USER,
    password: env.MYSQL_DB_PASSWORD,
    name: env.MYSQL_DB_NAME,
  },
  secret: env.API_SECRET,
};

/**
 *
 * @param {import('ascertain').Schema<typeof config>} schema
 * @returns
 */
const validate = (schema) => ascertain(schema, config, '[DATA]');

module.exports = { config, validate };
