/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const authenticate = async function (req, res, next) {
  try {
    // if (authenticated) {
    next();
    // }
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
