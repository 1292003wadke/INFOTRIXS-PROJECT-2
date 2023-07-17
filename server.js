const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set up routes for the HTML files
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'C:\Users\Darshan\OneDrive\Desktop\project 2\index.html');
});

app.get('/browse', (req, res) => {
  res.sendFile(__dirname + 'C:\Users\Darshan\OneDrive\Desktop\project 2\sample.html');
});

app.get('/playlist', (req, res) => {
  res.sendFile(__dirname + 'C:\Users\Darshan\OneDrive\Desktop\project 2\second page.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
