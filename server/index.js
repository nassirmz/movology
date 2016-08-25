var express = require('express');
var qs = require('qs');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
var port = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.sendStatus(200);
});

app.post('/', require('./post'));

app.listen(port);
