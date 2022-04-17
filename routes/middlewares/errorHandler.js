const debug = require("debug")("backend:errorHandler");
/**
 *
 * @param { import("http-errors").HttpError} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const errorHandler = function (err, req, res, next) {
  // set locals, only providing error in development
  debug(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page

  res.status(err?.status || 500);

  if (req.path.startsWith("/api")) {
    return res.json(err);
  } else {
    return res.render("error", { error: err, message: err.message });
  }
};

module.exports = errorHandler;
