const { Model } = require('objection');
const Password = require('objection-password')();

/**
 * @see https://vincit.github.io/objection.js/
 * @extends Model
 * @class
 */
class User extends Password(Model) {
  static tableName = 'user';

  static idColumn = 'id';

  static useLimitInFirst = true;

  /**
   * this validates insert input and update input only
   * @type {import('objection').JSONSchema}
   */
  static jsonSchema = {
    type: 'object',
    required: [
      'name',
      'username',
      'password',
      'user_type',
      'email',
      'phone_number',
    ],
    additionalProperties: false,
    properties: {
      name: { type: 'string', minLength: 1, maxLength: 255 },
      username: { type: 'string', minLength: 1, maxLength: 255 },
      password: { type: 'string', minLength: 10, maxLength: 255 },
      user_type: {
        type: 'string',
        enum: ['driver', 'passenger', 'admin'],
        default: 'passenger',
      },
      email: { type: 'string', minLength: 5, maxLength: 255 },
      phone_number: { type: 'string', minLength: 10, maxLength: 255 },
      license_id: { type: ['string', 'null'], maxLength: 255 },
    },
  };
}

module.exports = User;
