const { Model } = require('objection');
/**
 * @see https://vincit.github.io/objection.js/
 * @extends Model
 * @class
 */
class Reserve extends Model {
  static tableName = 'trip_passengers';

  static useLimitInFirst = true;

  /**
   * this validates insert input and update input only
   * @type {import('objection').JSONSchema}
   */
  static jsonSchema = {
    type: 'object',
    required: [
      'passenger_id',
      'trip_id',
    ],
    additionalProperties: false,
    properties: {
        passenger_id: { type: 'number' },
        trip_id: { type: 'number' },
    },
  };
}

module.exports = Reserve;
