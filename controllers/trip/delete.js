const { Trip } = require('../../models');
/**
 * delete trip from database
 * by id received from API
 * @param {Object} tripInfo
 * @returns
 */

module.exports = async function deleteF(tripInfo) {
  const id = Number(tripInfo.Trip_id);
  const trip = await Trip.query().deleteById(id);
  return { trip };
};
