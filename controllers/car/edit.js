const { Car } = require('../../models');
/**
 * @param {Object} carInfo
 * @returns
 */

module.exports = async function edit(carInfo) {
  const car = await Car.query().updateAndFetchById(Number(carInfo.id), {
    year_of_production: Number(carInfo.year_of_production),
    manufacturer: carInfo.manufacturer,
    plate_number: carInfo.plate_number,
    model: carInfo.model,
    color: carInfo.color,
    car_license: carInfo.car_license,
    driver_id: Number(carInfo.driver_id),
  });
  return { car };
};
