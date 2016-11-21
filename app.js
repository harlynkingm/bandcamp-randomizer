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

//function getRandomInt (min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//
//var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//
//var length = getRandomInt(3, 7);
//
//var query = ""
//for (var i = 0; i < length; i++){
//  query += letters.charAt(getRandomInt(0, letters.length));
//}
// 
//var params = {
//  query: query,
//  page: 1
//};
//
//var album = ""
// 
//bandcamp.search(params, function(error, searchResults) {
//  if (error) {
//    console.log(error);
//  } else {
//    for (var i = 0; i < searchResults.length; i++){
//      if (album == "" && searchResults[i].type == "album") {
//        album = searchResults[i].url;
//        open(album);
//      }
//    }
//  }
//});