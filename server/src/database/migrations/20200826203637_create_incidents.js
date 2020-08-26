
exports.up = function(knex) {
    return knex.schema.createTable("incidents", table => {
        // creates a table id, that auto increments by 1
        table.increments("id");

        table.string("title").notNullable; // notNullable means it's a required field
        table.string("description").notNullable;
        table.decimal("value").notNullable;

        // relationship with ong table
        table.string("ong_id").notNullable();
        // ong_id field refers to table ongs' id
        table.foreign("ong_id").references("id").inTable("ongs");
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
