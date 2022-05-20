const { Model } = require('objection');
/**
 * @see https://vincit.github.io/objection.js/
 * @extends Model
 * @class
 */
class Trip extends Model {
  static tableName = 'trip';

  static idColumn = 'id';

  static useLimitInFirst = true;

  /**
   * this validates insert input and update input only
   * @type {import('objection').JSONSchema}
   */
  static jsonSchema = {
    type: 'object',
    required: [
      'start_at',
      'end_at',
      'status',
      'distance',
      'driver_id',
      'seats',
    ],
    additionalProperties: false,
    properties: {
      start_at: { type: 'string', minLength: 1, maxLength: 255 },
      end_at: { type: 'string', minLength: 1, maxLength: 255 },
      status: { type: 'string', minLength: 1, maxLength: 255 },
      distance: { type: 'number', minLength: 1, maxLength: 255 },
      driver_id: { type: 'number', minLength: 1, maxLength: 255 },
      seats: { type: 'number', minLength: 1, maxLength: 255 },
    },
  };
}

module.exports = Trip;
