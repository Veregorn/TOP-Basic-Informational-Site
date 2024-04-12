const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Define the port
const PORT = process.env.PORT || 8080;

// Handle the different GET requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});

// Handle the 404 error
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));