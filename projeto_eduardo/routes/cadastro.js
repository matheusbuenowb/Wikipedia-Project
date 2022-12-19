var express = require('express');
var router = express.Router();

var model = require('./../model/usuarios')();

/* GET home page. */


router.get('/', function (req, res, next) {
  model.find(null, function (err, usuarios) {
    if (err) {
      throw err;
    }

    res.render('cadastro', { title: 'Express', usuarios: usuarios, is_admin: false });
  });

});



router.get('/:admin', function (req, res, next) {
  var is_admin = req.param("admin").split('admin=')[1];
  model.find(null, function (err, usuarios) {
    if (err) {
      throw err;
    }

    res.render('cadastro', { title: 'Express', usuarios: usuarios, is_admin: is_admin });
  });

});



router.post('/add', function (req, res, next) {
  var body = req.body;
  body.status = false;
  model.create(body, function (err, usuario) {
    if (err) {
      throw err;
    }
    res.redirect('/cadastro');
  });
});








module.exports = router;
