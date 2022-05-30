const { Car } = require('../../models');
/**
 * Delete car from database
 * by id received from API
 * @param {Object} carInfo
 * @returns
 */

module.exports = async function deleteF(carInfo) {
  const id = Number(carInfo.Car_id);
  const car = await Car.query().deleteById(id);
  return { car };
};
