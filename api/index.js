var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.appendFile('index.html', '<p> hiiiii</p>', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}).listen(8080);
