/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const login = async function (req, res, next) {
  const { username, password } = req.body;
  try {
    // const user = await getToken(username, password);
    // res.status(200).json(user)
  } catch (error) {
    next(error);
  }
};

module.exports = login;
