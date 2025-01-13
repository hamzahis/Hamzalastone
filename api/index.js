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
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Enter Your Details</title>
    </head>
    <body>
      <h1>Enter Your Details</h1>
      <form action="/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
  `);
});

// Route to handle form submissions (POST request)
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Append user data to file.txt
  const data = `Name: ${name}, Email: ${email}\n`;
  fs.appendFile('file.txt', data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('An error occurred while saving your data.');
    }

    res.send(`<h1>Thank you, ${name}! Your details have been saved.</h1>`);
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

