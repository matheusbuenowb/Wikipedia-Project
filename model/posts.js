module.exports = function(){
    var db = require('./../libs/connect_db')();
    var mongoose = require('mongoose');

    var post = mongoose.Schema({
        titulo: String,
        categoria: String,
        thumbnail: String,
    });


    return mongoose.model('posts', post);
}