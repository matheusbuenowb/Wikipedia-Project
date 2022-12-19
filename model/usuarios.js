module.exports = function(){
    var db = require('./../libs/connect_db')();
    var mongoose = require('mongoose');

    var usuario = mongoose.Schema({
        nome: String,
        email: String,
        login: String,
        senha: String 
    });


    return mongoose.model('usuarios', usuario);
}