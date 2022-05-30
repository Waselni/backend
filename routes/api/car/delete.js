const { deleteCar } = require('../../../controllers/car');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function deleteCarf(req, res, next) {
  try {
    const data = await deleteCar(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = deleteCarf;
