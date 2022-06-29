const knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../knexfile');

Model.knex(knex(knexConfig));
const User = require('./User');
const Car = require('./Car');
const Trip = require('./Trip');
const Reserve = require('./Reserve');
const Review = require('./Review');

module.exports = {
  User,
  Car,
  Trip,
  Reserve,
  Review,
};
