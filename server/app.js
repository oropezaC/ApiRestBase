var express =require("express");
var app = express();
var bodyParser = require("body-parser")
var mongoose = require('mongoose');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser());

var moviesRouter = require('./routes/tvshows');
app.use('/tv', moviesRouter);



var main = require('./models/main');

main.start()
.then(function(){
  app.listen(3000, function (){
  console.log("Node server running on http://localhost:3000");
  console.log("Go!!");
  });
});