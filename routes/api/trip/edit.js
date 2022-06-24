const { editTrip } = require('../../../controllers/trip');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function edit(req, res, next) {
  try {
    const data = await editTrip(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = edit;
