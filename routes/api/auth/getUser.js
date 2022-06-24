const { getUser } = require('../../../controllers/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function getUserF(req, res, next) {
  try {
    const data = await getUser(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = getUserF;
