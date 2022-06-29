const { Reserve } = require('../../models');

module.exports = async function get() {
  const reserve = await Reserve.query();
  return reserve;
};
