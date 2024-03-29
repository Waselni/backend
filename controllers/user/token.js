const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const { User } = require('../../models');
const { config, validate } = require('../../config');

validate({
  secret: String,
});

const { secret } = config;

/**
 * Creates new token for authorized user
 * @param {Object} userInformation
 * @returns
 */

module.exports = async function createToken(userInformation) {
  const user = await User.query().findOne({
    username: userInformation.username,
  });
  if (!user) {
    throw new createError.Unauthorized('wrong credentials');
  }
  const passwordValid = await user.verifyPassword(userInformation.password);

  if (!passwordValid) {
    throw new createError.Unauthorized('wrong credentials');
  }

  const token = jwt.sign({ id: user.id }, secret);
  const userType = user.user_type;
  const {id} =user;

  return { token, userType, id };
};
