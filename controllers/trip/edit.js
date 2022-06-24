const { Trip } = require('../../models');
/**
 * @param {Object} tripInfo
 * @returns
 */

module.exports = async function edit(tripInfo) {
  const trip = await Trip.query().updateAndFetchById(Number(tripInfo.id), {
    start_at: tripInfo.start_at,
    end_at: tripInfo.end_at,
    status: tripInfo.status,
    distance: Number(tripInfo.distance),
    driver_id: Number(tripInfo.driver_id),
    seats: Number(tripInfo.seats),
  });
  return { trip };
};
