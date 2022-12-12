const express = require('express');
const cors = require('cors');
const session = require('express-session');
const parseurl = require('parseurl');
const store = new session.MemoryStore();

var path = require('path');

//require('dotenv').config();

//const rotas = require('./rotas');
const app = express();

/*app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 24 * 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: false,
  store
}));

//Número de visualizações
app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }
  let pathname = parseurl(req).pathname;
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
  //console.log(req.session.views);
  next();
})*/

app.use(express.json());


app.use('/views', express.static('views'));


// Server setup
app.listen(process.env.HTTP_PORT || 3000, '0.0.0.0', () => {
  console.log(`Unity: http://localhost:${process.env.HTTP_PORT}`);
});

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1', (err, conn) =>{
    if(err) throw err;
    const db =  conn.db('exemplo01');
    console.log('conexão estabelecida');
    conn.close();
});
