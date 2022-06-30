const { start } = require('../../../controllers/trip');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function startTripF(req, res, next) {
  try {
    const data = await start(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = startTripF;
