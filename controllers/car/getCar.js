const { Car } = require('../../models');
/**
 * @param {Object} carInfo
 * @returns
 */

module.exports = async function getCarF(carInfo) {
  const id = Number(carInfo.Car_id);
  const car = await Car.query().findByIds(id);
  return { car };
};
