const { Trip } = require('../../models');

module.exports = async function end(trip_id) {
    const status = await Trip.query()
        .patch({ status: 'In Progress' })
        .findById(Number(trip_id.trip_id));
    return { status };
};
