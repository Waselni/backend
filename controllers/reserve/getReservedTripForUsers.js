const { Reserve, Trip } = require('../../models');



module.exports = async function get(passenger_id) {
    const ids = [];
    const idForTrips = await Reserve.query().select('trip_id').where('passenger_id', Number(passenger_id));
    for (var i = 0; i < idForTrips.length; i++) {
        ids.push(idForTrips[i].trip_id);
    }
    const trips = await Trip.query()
        .select('id', 'start_at', 'distance', 'driver_id', 'seats', 'source', 'destination', 'status')
        .whereIn('id', ids);
        if(ids[0]!= null){
            return trips;
        }else {
            return 'The user didnt reserved in any trip'
        }

};
