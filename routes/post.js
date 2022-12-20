var express = require('express');
var router = express();

var model = require('./../model/posts')();

/* GET home page. */

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads' )
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
});

const upload = multer({ storage: storage });

router.get('/', function (req, res, next) {
  model.find(null, function (err, posts) {
    if (err) {
      throw err;
    }

    res.render('posts', { title: 'Express', posts:posts});
  });

});


router.post('/add', upload.single('thumbnail'), function (req, res, next) {
    console.log(req.file);
    var file = req.file;
    var body = req.body;
    var post = {...body, thumbnail: file.filename};
    body.status = false;
    model.create(post, function (err, post) {
        if (err) {
        throw err;
        }
        res.redirect('/posts?admin=true');
    });
});


module.exports = router;
