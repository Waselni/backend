const { Car, User } = require('../../models');

/**
 * Delete car from database
 * by id received from API
 * @param {Object} carInfo
 * @returns
 */

module.exports = async function deleteF(user) {
  const driver_id = Number(user.driver_id);
  const car = await Car.query().select('id').findOne('driver_id', driver_id);
  console.log(car);
  await User.query()
    .findById(driver_id)
    .patch({ user_type: 'passenger' });
  await Car.query().deleteById(car.id);
  return { car };
};
