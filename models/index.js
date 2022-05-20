const knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../knexfile');

Model.knex(knex(knexConfig));
const User = require('./User');
const Car = require('./Car');
const Trip = require('./Trip');

module.exports = {
  User,
  Car,
  Trip,
};
