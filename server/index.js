var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
var port = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.sendStatus(200);
});

app.post('/', function (req, res) {
  console.log(req.query);
  res.sendStatus(200);
});


app.listen(port);