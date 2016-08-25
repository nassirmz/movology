module.exports = function (req, res) {
  var query = querystring.unescape(req.query.q);
  query = query.replace(/\'/g, "");
  query = qs.parse(query);
  switch(Object.keys(query.q)[0]) {
   case 'Name':
    res.send('Nassir Zeinu');
   default:
    res.sendStatus(200);
  }
}