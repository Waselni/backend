const { User } = require('../../models');
/**
 * @param {Object} carInfo
 * @returns
 */

module.exports = async function edit(userInformation) {
  const name = await User.query().patch({name:userInformation.name}).findById(Number(userInformation.id));
  const email = await User.query().patch({email:userInformation.email}).findById(Number(userInformation.id));
  const phone_number = await User.query().patch({phone_number:userInformation.phone_number}).findById(Number(userInformation.id));
  return { name };
};
