const { createUser } = require('../../../controllers/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function register(req, res, next) {
  try {
    await createUser(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

module.exports = register;
