const { Reserve} = require('../../models');
const {Trip}=require('../../models')

/**
 * Delete car from database
 * by id received from API
 * @param {Object} reserveInfo
 * @returns
 */

module.exports = async function deleteF(reserveInfo) {
  
    const reserve = await Reserve.query().delete()
    .where('passenger_id', reserveInfo.passenger_id)
    .where('trip_id',reserveInfo.trip_id);
    console.log(reserve);
    if(reserve==0){
      return 'invalid input'
    }else{
    var numberOfSeats = await Trip.query( )
    .select('seats')
    .where('id', Number(reserveInfo.trip_id));
    const newNumber = Number(numberOfSeats[0].seats +1);
    await Trip.query().patch({ seats :newNumber}).findById(reserveInfo.trip_id);
    return  reserve ;
}
};
