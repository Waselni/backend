const { createToken } = require('../../../controllers/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function login(req, res, next) {
  try {
    const token = await createToken(req.body);
    res.status(200).json(token);
  } catch (error) {
    next(error);
  }
}

module.exports = login;
