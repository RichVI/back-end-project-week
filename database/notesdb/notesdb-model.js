const db = require('../dbConfig') //connects to database

//Find all notes in db
function find(){
    return db('notesdb')
    .select('id','title', 'content')
}
//Find notes by ID
function findById(id) {
    return db('notesdb')
    .select('id','title', 'content')
    .where({id})
    .first();
}
//Insert new API to notesdb
function insert(api) {
    return db('notesdb')
    .insert(api);
  }

//Update API to notesdb
function update(changes, id){
    return db('notesdb')
    .where({id})
    .update(changes); //updates the record with 'changes' where the id matches
}

//Remove User API
function remove(id){
    return db('notesdb')
    .where({id})
    .del(); //deletes the record that matches the id
}

module.exports ={
    find,
    findById,
    insert,
    update,
    remove
}