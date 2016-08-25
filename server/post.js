var qs = require('qs');
var querystring = require('querystring');

module.exports = function (req, res) {
  var query = querystring.unescape(req.query.q);
  query = query.replace(/\'/g, "");
  query = qs.parse(query);
  switch(Object.keys(query.q)[0]) {
    case 'Name':
      res.send('Nassir Zeinu');
    case 'Email':
      res.send('nassirmz@gmail.com');
    case 'Years':
      res.send('1');
    case 'Position':
      res.send('Full Stack Engineer');
    case 'Phone':
      res.send('323-345-8161');
    case 'Referrer':
      res.send('indeed.com');
    case 'Status':
      res.send('US citizen')

   default:
    res.sendStatus(200);
  }
}