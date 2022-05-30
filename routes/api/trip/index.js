const express = require('express');
const addTrip = require('./addTrip');
const getTrips = require('./getTrips');
const deleteTrip = require('./delete');

const router = express.Router();

router.use('/addTrip', addTrip);
router.use('/getTrips', getTrips);
router.use('/delete', deleteTrip);

module.exports = router;
