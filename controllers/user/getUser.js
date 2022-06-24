const { User } = require('../../models');
/**
 * @param {Object} userInformation
 * @returns
 */

module.exports = async function getUserF(userInformation) {
  const id = Number(userInformation.User_id);
  const user = await User.query().findByIds(id);
  return { user };
};
