const { Trip } = require('../../models');
/**
 * @param {Object} tripInfo
 * @returns
 */

module.exports = async function get() {
  const trips = await Trip.query()
  .where('seats','>',0)
  .whereNot('status','Completed');
  console.log(trips);
  return trips;

};
