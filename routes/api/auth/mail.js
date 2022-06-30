const { mail } = require('../../../controllers/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function mailF(req, res, next) {
  try {
    const data = await mail(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = mailF;
