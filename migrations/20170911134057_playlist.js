
exports.up = function(knex, Promise) {
  return knex.schema.createTable('playlist', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('playlist');
};
