const { Trip } = require('../../models');
const { User } = require('../../models');
/**
 * Register new car in database
 * from data received from API
 * @param {Object} tripInfo
 * @returns
 */

module.exports = async function create(tripInfo) {
  const trip = await Trip.query().insert({
    start_at: tripInfo.start_at,
    end_at: tripInfo.end_at,
    status: tripInfo.status,
    distance: Number(tripInfo.distance),
    driver_id: Number(tripInfo.driver_id),
    seats: Number(tripInfo.seats),
  });
  // const user = await User.query().findById(tripInfo.driver_id);
  return { trip };
};
