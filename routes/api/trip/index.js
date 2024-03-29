const express = require('express');
const addTrip = require('./addTrip');
const getTrips = require('./getTrips');
const deleteTrip = require('./delete');
const editTrip = require('./edit');
const getTripsForDriver = require('./getTripsForDriver');
const start = require('./start');
const end = require('./end');

const router = express.Router();

router.use('/addTrip', addTrip);
router.use('/getTrips', getTrips);
router.use('/delete', deleteTrip);
router.use('/edit', editTrip);
router.use('/getTripsForDriver', getTripsForDriver);
router.use('/start', start);
router.use('/end', end);
module.exports = router;
