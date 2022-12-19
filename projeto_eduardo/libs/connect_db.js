
var mongoose = require('mongoose');
var db;
module.exports = function() {
    if (!db) {
        db = mongoose.connect('mongodb://127.0.0.1:27017/wikipedia') ;
    }
    return db;
}

