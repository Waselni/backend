const { Trip } = require('../../models');
const { User } = require('../../models');

module.exports = async function get() {
  const trips = await Trip.query();
  return trips;
};
