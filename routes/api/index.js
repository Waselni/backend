const express = require('express');
const auth = require('./auth');
const car = require('./car');
const trip = require('./trip');
const reserve = require('./reserve');

const router = express.Router();
router.use('/auth', auth);
router.use('/car', car);
router.use('/trip', trip);
router.use('/reserve', reserve);

module.exports = router;
