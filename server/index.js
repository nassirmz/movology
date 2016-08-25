var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendStatus(200);
});

app.listen(port);