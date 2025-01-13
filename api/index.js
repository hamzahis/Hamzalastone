const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '../public')));

// Handle root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/file.html'));
});

module.exports = app;
