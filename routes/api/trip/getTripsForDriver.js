const { getTripsForDriver } = require('../../../controllers/trip');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function getTripForDriverF(req, res, next) {
  try {
    const data = await getTripsForDriver(req.body);
    res.send(data);   
  } catch (error) {
    next(error);
  }
}

module.exports = getTripForDriverF;
