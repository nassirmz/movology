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

app.post('/', function (req, res) {
  var query = querystring.unescape(req.query.q);
  query = query.replace(/\'/g, "");
  query = qs.parse(query);
  console.log(query.q);
  switch(Object.keys(query.q)[0]) {
   case 'Name':
    res.send('Nassir Zeinu');
   default:
    res.sendStatus(200);
  }
});


app.listen(port);
