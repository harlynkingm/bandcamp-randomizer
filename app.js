var express = require("express");
var app = express();
var http = require("http").Server(app);
var morgan = require('morgan');
var bandcamp = require('bandcamp-scraper');
var request = require("request");

app.use(morgan('dev'));
require('./routes.js')(app, bandcamp, request);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");


app.listen(app.get('port') ,app.get('ip'), function () {
    console.log("Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});