const express = require('express');
const cors = require('cors');
const session = require('express-session');
const parseurl = require('parseurl');
const store = new session.MemoryStore();

var path = require('path');

const app = express();

app.use(express.json());

app.use('/views', express.static('views'));

//Conexão com o node e o servidor mongo

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
