// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // File system module for writing to files

// Initialize the Express app
const app = express();

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the form (GET request)
app.get('/', (req, res) => {

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
  res.write("god");
});
/*  fs.readFile('file.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });*/
 // res.send();
});



// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

