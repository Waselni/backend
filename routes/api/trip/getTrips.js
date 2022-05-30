const { getTrips } = require('../../../controllers/trip');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function getTripF(req, res, next) {
  try {
    const data = await getTrips();
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = getTripF;
