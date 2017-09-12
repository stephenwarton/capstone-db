const playlists = require('./seeds-data/playlists');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE playlist RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('playlist').insert(playlists);
    });
};
