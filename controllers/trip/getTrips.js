const { Trip } = require('../../models');
/**
 * @param {Object} tripInfo
 * @returns
 */

module.exports = async function get() {
  const trips = await Trip.query().whereNot('seats','>',0);
  console.log(trips);
  return trips;

};
