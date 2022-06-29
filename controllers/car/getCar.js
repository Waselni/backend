const { Car } = require('../../models');
/**
 * @param {Object} carInfo
 * @returns
 */

module.exports = async function getCarF(carInfo) {
  const id = Number(carInfo.driver_id);
  const carlist = await Car.query().where('driver_id', id).limit(1);
  const car = carlist[0];
  const carId = car.id;
  const year_of_production = car.year_of_production;
  const manufacturer = car.manufacturer;
  const plate_number = car.plate_number;
  const model = car.model;
  const color = car.color;
  const car_license = car.car_license;
  return { carId, year_of_production, manufacturer, plate_number, model, color, car_license };
};
