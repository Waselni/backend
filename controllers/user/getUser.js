const { User } = require('../../models');
/**
 * @param {Object} userInformation
 * @returns
 */

module.exports = async function getUserF(userInformation) {
  const id = Number(userInformation.User_id);
  const userlist = await User.query().where('id', id).limit(1);
  const user = userlist[0];
  const name = user.name;
  const phone_number = user.phone_number;
  const email = user.email;
  return { name, phone_number, email };
};
