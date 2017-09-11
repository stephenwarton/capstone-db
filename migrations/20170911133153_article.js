
exports.up = function(knex, Promise) {
  return knex.schema.createTable('article', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.string('url').notNullable();
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('article');
};
