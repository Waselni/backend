const express = require("express");
const createError = require("http-errors");
const api = require("./api");
const web = require("./web");
const errorHandler = require("./middlewares/errorHandler");

const router = express.Router();

router.use("/api", api);
router.use("/web", web);

router.use(function (req, res, next) {
  next(createError(404));
});

router.use(errorHandler);

module.exports = router;
