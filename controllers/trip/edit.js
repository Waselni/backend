const { Trip } = require('../../models');
/**
 * @param {Object} tripInfo
 * @returns
 */

module.exports = async function edit(tripInfo) {
  const start_at = await Trip.query().patch({ start_at: tripInfo.start_at }).findById(Number(tripInfo.id));
  const source = await Trip.query().patch({ source: tripInfo.source }).findById(Number(tripInfo.id));
  const destination = await Trip.query().patch({ destination: tripInfo.destination }).findById(Number(tripInfo.id));
  const seats = await Trip.query().patch({seats: Number(tripInfo.seats)}).findById(Number(tripInfo.id));
  return { start_at };
};
