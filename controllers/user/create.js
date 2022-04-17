const { User } = require('../../models');

/**
 * Creates new user in database
 * from data received from API
 * @param {Object} userInformation
 * @returns
 */
module.exports = async function create(userInformation) {
  const [username] = userInformation.email.split('@');

  const user = await User.query().insert({
    name: userInformation.name,
    // student id
    username,
    password: userInformation.password,
    user_type: 'passenger',
    email: userInformation.email,
    phone_number: userInformation.phone_number,
  });

  return user;
};
