const { getUsers } = require('../../../controllers/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function getUsersF(req, res, next) {
  try {
    const data = await getUsers();
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = getUsersF;
