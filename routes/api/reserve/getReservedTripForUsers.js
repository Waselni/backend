const { getReservedTripForUsers } = require('../../../controllers/reserve');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function getReservedTripForUsersF(req, res, next) {
  try {
    const passenger_id =Number(req.body.passenger_id);
    const data = await getReservedTripForUsers(passenger_id);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = getReservedTripForUsersF;
