
exports.up = function(knex) {
    return knex.schema.createTable('notesdb', api => {
        //Auto Incrementing ID
        api.increments();
        // Title
        api.string('title').notNullable()
        // Content
        api.string('content').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('notesdb');
};
