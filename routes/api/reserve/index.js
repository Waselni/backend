const express = require('express');
const add = require('./add');
const cancel = require('./cancel');
const get = require('./get');
const getReservedTripForUsers = require('./getReservedTripForUsers');



const router = express.Router();
router.use('/add', add);
router.use('/cancel', cancel);
router.use('/get', get);
router.use('/getReservedTripForUsers', getReservedTripForUsers);

module.exports = router;
