const { end } = require('../../../controllers/trip');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function endTripF(req, res, next) {
  try {
    const data = await end(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = endTripF;
