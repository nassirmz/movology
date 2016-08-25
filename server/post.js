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
    case 'Puzzle':
      var puzzle = new Buffer(req.query.puzzle, 'base64');
      var ans = eval(puzzle.toString());
      res.send(Math.round(ans) + '');
      break;
    case 'Source':
      res.send('https://github.com/nassirmz/movology.git');
      break;
    case 'Resume':
      res.send('https://drive.google.com/folderview?id=0B3MWzKqdceojcVAwVGhZR3I2b3M&usp=sharing');
      break;
    default:
      res.sendStatus(200);
  }
}
