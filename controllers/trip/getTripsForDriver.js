const { Trip } = require('../../models');
/**
 * @param {Object} tripInfo
 * @returns
 */

module.exports = async function getCarF(tripInfo) {
  const id = Number(tripInfo.driver_id);
  const trips = await Trip.query().select('id', 'start_at', 'distance', 'driver_id', 'seats', 'source', 'destination', 'status').where('driver_id', id);
  return trips;
};
