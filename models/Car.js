const { Model } = require('objection');
/**
 * @see https://vincit.github.io/objection.js/
 * @extends Model
 * @class
 */
class Car extends Model {
  static tableName = 'car';

  static idColumn = 'id';

  static useLimitInFirst = true;

  /**
   * this validates insert input and update input only
   * @type {import('objection').JSONSchema}
   */
  static jsonSchema = {
    type: 'object',
    required: [
      'year_of_production',
      'manufacturer',
      'plate_number',
      'model',
      'color',
      'car_license',
      'driver_id',
    ],
    additionalProperties: false,
    properties: {
      year_of_production: { type: 'number', minLength: 1, maxLength: 255 },
      manufacturer: { type: 'string', minLength: 1, maxLength: 255 },
      plate_number: { type: 'string', minLength: 1, maxLength: 255 },
      model: { type: 'string', minLength: 1, maxLength: 255 },
      color: { type: 'string', minLength: 1, maxLength: 255 },
      car_license: { type: 'string', minLength: 1, maxLength: 255 },
      driver_id: { type: 'number', minLength: 1, maxLength: 255 },
    },
  };
}

module.exports = Car;
