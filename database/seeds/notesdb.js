
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notesdb').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notesdb').insert(
        [
          {
            title: 'Test Note1 title',
            content: 'Test Note1 content'
          },
          {
            title: 'Test Note2 title',
            content: 'Test Note2 content'
          },
          {
            title: 'Test Note3 title',
            content: 'Test Note3 content'
          },
          {
            title: 'Test Note4 title',
            content: 'Test Note4 content'
          },
          {
            title: 'Test Note5 title',
            content: 'Test Note5 content'
          }
        ]);
    });
};
