var http = require('http');
var fs = require('fs');

// Create an HTTP server
http.createServer(function (req, res) {
  // HTML content to append to the file
  const htmlContent = `
<html>
  <body>
    <h1>Header</h1>
    <p>Paragraph.</p>
  </body>
</html>
`;

  // Append the HTML content to 'index.html'
  fs.appendFile('index.html', htmlContent, function (err) {
    if (err) {
      console.error('Error saving file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error saving file.');
      return;
    }

    console.log('Saved!');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('HTML content saved to index.html');
  });
}).listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});
