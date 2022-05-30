const { addTrip } = require('../../../controllers/trip');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function addTripF(req, res, next) {
  try {
    const data = await addTrip(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = addTripF;
