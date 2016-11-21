var express = require("express");
var app = express();
var http = require("http").Server(app);
var morgan = require('morgan');
var bandcamp = require('bandcamp-scraper');
//var open = require('opn');

app.use(morgan('dev'));
require('./routes.js')(app, bandcamp);

http.listen(8000, function(){
  console.log('listening on *:8000');
});