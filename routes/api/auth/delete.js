const { deleteUser } = require('../../../controllers/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function deleteUserf(req, res, next) {
  try {
    const data = await deleteUser(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = deleteUserf;
