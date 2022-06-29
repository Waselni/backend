const { addReserve } = require('../../../controllers/reserve');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function add(req, res, next) {
  try {
    const data = await addReserve(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = add;
