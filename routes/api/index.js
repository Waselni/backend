const express = require('express');
const auth = require('./auth');
const car = require('./car');
const trip = require('./trip');

const router = express.Router();
router.use('/auth', auth);
router.use('/car', car);
router.use('/trip', trip);
module.exports = router;
