const { deleteTrip } = require('../../../controllers/trip');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function deleteTripf(req, res, next) {
  try {
    const data = await deleteTrip(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = deleteTripf;
