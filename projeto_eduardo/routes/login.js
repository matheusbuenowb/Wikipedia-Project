var express = require('express');
var router = express.Router();

// var model = require('../model/usuarios')();

/* GET home page. */


router.get('/', function (req, res, next) {
  // model.find(null, function (err, usuarios) {
  //   if (err) {
  //     throw err;
  //   }

  //   res.render('cadastro', { title: 'Express', usuarios: usuarios, is_admin: false });
  // });


    res.render('login', { title: 'Express'  });

});









module.exports = router;
