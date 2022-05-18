const { registerCar } = require('../../../controllers/car');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function register(req, res, next) {
  try {
    const data = await registerCar(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = register;
