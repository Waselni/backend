const { getReserve } = require('../../../controllers/reserve');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function getReserveF(req, res, next) {
  try {
    const data = await getReserve();
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = getReserveF;
