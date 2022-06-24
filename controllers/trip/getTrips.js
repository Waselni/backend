const { Trip } = require('../../models');

module.exports = async function get() {
  const trips = await Trip.query();
  return trips;
};
