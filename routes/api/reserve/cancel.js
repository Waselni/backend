const {cancelReserve } = require('../../../controllers/reserve');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function deleteReserveF(req, res, next) {
  try {
    const data = await cancelReserve(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = deleteReserveF;
