//mongoose
var link = require('./link.js');
var mongoose = link.mongoose;
var db = link.db;

/*
 *  Schema of todo
 */
var todo = new mongoose.Schema({
    todo: { type: String },
    info: { type: String },
});

//exports model
module.exports = db.model('todo', todo);
