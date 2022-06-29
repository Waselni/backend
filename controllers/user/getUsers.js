const { User } = require('../../models');

module.exports = async function get() {
  const users = await User.query().select('id','name', 'email', 'phone_number');
  return users;
};
