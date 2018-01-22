const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();


const port = 8000;
var cors = require('cors');
app.options('*', cors());
app.use(cors());

app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
const Stampery = require('stampery');
var stampery = new Stampery('87cd2fdd-02a7-4eef-c647-1b73d280f62a');
require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});



app.post ('/stamp',(req,res)=>{

console.log('Here is Post Body',req.body.fcn);

var h = stampery.hash(req.body.fcn + Math.random());
console.log(h);
stampery.stamp(h, function(err, stamp) {
  if (err) {

     res.json("something Bad Happens");
  }
  console.log("Your transaction will be posted on Bitcoin and Ethereum Blockchain");
  res.json("Your transaction will be posted on Bitcoin and Ethereum Blockchain");
});

});



app.post('/notes',(req,res)=>{

console.log(req.body);
res.send('Hello');


});