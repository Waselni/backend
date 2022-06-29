const { Trip } = require('../../models');
/**
 * Register new car in database
 * from data received from API
 * @param {Object} tripInfo
 * @returns
 */

module.exports = async function create(tripInfo) {
  const trip = await Trip.query().insert({
    start_at: tripInfo.start_at,
    distance: Number(tripInfo.distance),
    driver_id: Number(tripInfo.driver_id),
    seats: Number(tripInfo.seats),
    source: String(tripInfo.source),
    destination: String(tripInfo.destination),
    duration: String(tripInfo.duration),
  });
  return { trip };
};
