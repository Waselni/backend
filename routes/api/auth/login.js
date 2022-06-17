const { createToken } = require('../../../controllers/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function login(req, res, next) {
  try {
    const response = await createToken(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = login;
