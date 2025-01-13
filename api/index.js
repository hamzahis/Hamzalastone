var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.appendFile('index.html', '<html>
<body>
<h1>My Header</h1>
<p>My paragraph.</p>
</body>
</html>', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}).listen(8080);
