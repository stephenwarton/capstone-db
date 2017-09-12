const article_playlists = require('./seeds-data/article_playlists');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE article_playlist RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('article_playlist').insert(article_playlists);
    });
};
