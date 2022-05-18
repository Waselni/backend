const { Car } = require('../../models');

/**
 * Register new car in database
 * from data received from API
 * @param {Object} carInfo
 * @returns
 */

module.exports = async function create(carInfo) {
  const car = await Car.query().insert({
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
