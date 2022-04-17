/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const signup = async function (req, res, next) {
  const userInformation = req.body;
  try {
    // const user = await signUp(userInformation);
    // res.status(201).json(user)
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
