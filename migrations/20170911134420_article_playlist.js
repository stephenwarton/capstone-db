
exports.up = function(knex, Promise) {
  return knex.schema.createTable('article_playlist', (table) => {
    table.increments('id').primary();
    table.integer('article_id').references('article.id').unsigned().onDelete('cascade');
    table.integer('playlist_id').references('playlist.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('article_playlist');
};
