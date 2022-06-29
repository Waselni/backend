const express = require('express');
const createError = require('http-errors');
const api = require('./api');
const web = require('./web');

const router = express.Router();

router.use('/api', api);
router.use('/web', web);

router.use((_req, _res, next) => {
  next(createError(404));
});

module.exports = router;
