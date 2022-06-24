const { getCar } = require('../../../controllers/car');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function getCarf(req, res, next) {
  try {
    const data = await getCar(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = getCarf;
