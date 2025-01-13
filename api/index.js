// Import required modules
const express = require('express');
const fs = require('fs'); // File system module for writing to files
const path = require('path');

// Initialize the Express app
const app = express();

// Define a route to append data to the file
app.get('/write', (req, res) => {
  const filePath = path.join(__dirname, 'mynewfile1.txt'); // Ensure file path is correct
  const content = 'Hello content!\n';

  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('An error occurred while writing to the file.');
    }

    res.send('File updated successfully!');
  });
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
