/**
 * @param { import("knex").Knex } db
 * @returns { Promise<void> }
 */
exports.seed = async function (db) {
  const { count } = await db('car').count('*', { as: 'count' }).first();

  if (count === 0) {
    const user = await db
      .select('id')
      .from('user')
      .where('user_type', 'driver')
      .first();

    await db
      .insert([
        {
          year_of_production: 2012,
          manufacturer: 'BMW',
          plate_number: '6-1234-92',
          model: 'X5',
          color: 'black',
          car_license: '123456789',
          driver_id: user.id,
        },
      ])
      .into('car');
  }
};
