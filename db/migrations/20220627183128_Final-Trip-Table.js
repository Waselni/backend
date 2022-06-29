/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.alterTable('trip', (table) => {
      table.string('source').notNullable().alter({alterType:true,alterNullable: true});
      table.string('destination').notNullable().alter({alterType:true,alterNullable: true});

    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.alterTable('trip', (table) => {
      table.float('source').nullable().alter({alterType:true,alterNullable: true});
      table.float('destination').nullable().alter({alterType:true,alterNullable: true});
    });
  };
  