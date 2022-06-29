const { editUser } = require('../../../controllers/user');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function edit(req, res, next) {
  try {
    const data = await editUser(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = edit;
