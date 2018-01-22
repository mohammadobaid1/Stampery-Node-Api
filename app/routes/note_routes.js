
var express        = require('express');
var MongoClient    = require('mongodb').MongoClient;
var bodyParser     = require('body-parser');
var app            = express();


module.exports = function(app, db) {
};

app.post('/notes',(req,res)=>{

res.send('Hello');


});


app.get ('/say',(req,res)=>{

console.log('Noman');

});

