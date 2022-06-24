const express = require('express');
const addTrip = require('./addTrip');
const getTrips = require('./getTrips');
const deleteTrip = require('./delete');
const editTrip = require('./edit');

const router = express.Router();

router.use('/addTrip', addTrip);
router.use('/getTrips', getTrips);
router.use('/delete', deleteTrip);
router.use('/edit', editTrip);

module.exports = router;
