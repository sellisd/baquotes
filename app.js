// Import the required libraries
const express = require('express');
const fs = require('fs');

// Read the quotes from the JSON file
const quotes = JSON.parse(fs.readFileSync('ba_quotes.json', 'utf8'));

// Create an Express application
const app = express();

// First quote is source
app.get('/', (req, res) => { 
  const randomIndex = Math.floor(Math.random() * (quotes.length - 1)) + 1;
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));