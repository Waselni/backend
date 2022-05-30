const express = require('express');
const addTrip = require('./addTrip');
const getTrips = require('./getTrips');

const router = express.Router();

router.use('/addTrip', addTrip);
router.use('/getTrips', getTrips);

module.exports = router;
