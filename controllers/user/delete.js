const { User } = require('../../models');
/**
 * delete trip from database
 * by id received from API
 * @param {Object} userInformation
 * @returns
 */

module.exports = async function deleteF(userInformation) {
  const id = Number(userInformation.User_id);
  const user = await User.query().deleteById(id);
  return { user };
};
