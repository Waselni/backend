const e = require('express');
const { Reserve } = require('../../models');
const { Trip } = require('../../models');

/**
 * Register new car in database
 * from data received from API
 * @param {Object} reserveInfo
 * @returns
 */

module.exports = async function create(reserveInfo) {
  var numberOfSeats = await Trip.query( )
    .select('seats')
    .where('id', Number(reserveInfo.trip_id));
  // console.log(numberOfSeats[0].seats);
  if (Number(numberOfSeats[0].seats) > 0) {
    const reserve = await Reserve.query().insert({
      passenger_id: Number(reserveInfo.passenger_id),
      trip_id: Number(reserveInfo.trip_id),
    });
    const newNumber = Number(numberOfSeats[0].seats -1);
    await Trip.query().patch({ seats :newNumber}).findById(reserveInfo.trip_id);
    return (reserve);
  } else {
    return 'No seats available';
  }

};
