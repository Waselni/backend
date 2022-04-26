const knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../knexfile');

Model.knex(knex(knexConfig));
const User = require('./User');

module.exports = {
  User,
};
