var qs = require('qs');
var querystring = require('querystring');

module.exports = function (req, res) {
  var query = querystring.unescape(req.query.q);
  query = query.replace(/\'/g, "");
  query = qs.parse(query);
  switch(Object.keys(query.q)[0]) {
    case 'Name':
      res.send('Nassir Zeinu');
      break;
    case 'Email':
      res.send('nassirmz@gmail.com');
      break;
    case 'Years':
      res.send('1');
      break;
    case 'Position':
      res.send('Full Stack Engineer');
      break;
    case 'Phone':
      res.send('323-345-8161');
      break;
    case 'Referrer':
      res.send('indeed.com');
      break;
    case 'Status':
      res.send('US citizen');
      break;
    default:
      res.sendStatus(200);
  }
}