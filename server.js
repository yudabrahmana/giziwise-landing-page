const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  
  app.get('/articles', (req, res) => {
    res.sendFile(__dirname + '/public/articles.html');
  });
  
  app.get('/recipes', (req, res) => {
    res.sendFile(__dirname + '/public/recipes.html');
  });
  
  app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/public/users.html');
  });
  