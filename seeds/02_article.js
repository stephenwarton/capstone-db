const articles = require('./seeds-data/articles');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE article RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('article').insert(articles);
    });
};
