const addTrip = require('./addTrip');
const getTrips = require('./getTrips');
const deleteTrip = require('./delete');
const editTrip = require('./edit');
const getTripsForDriver = require('./getTripsForDriver');
const start = require('./start');
const end = require('./end');

module.exports = { addTrip, getTrips, 
    deleteTrip, editTrip, 
    getTripsForDriver, start,
     end };
