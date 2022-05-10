const express = require('express'); // importing a dependency
const app = express(); // creating an express app 
const port = 3000; // port number to start the server 

/********
  setting up routes for the express app
********/

// handling GET req on localhost:3000 
app.get('/', (req, res) => { // route
  console.log(req);
  res.send('<h1>Welcome to Home Page!</h1>');
});

// handling GET req on localhost:3000/about 
app.get('/about', (req, res) => { // route
  res.send('<h1>Welcome to About Page!</h1>');
});

// handling GET req on localhost:3000/contact 
app.get('/contact', (req, res) => { // route
  res.send('<h1>Welcome to Contact Page!</h1>');
});

app.get('/users', (req, res) => { // REST API Endpoint 
  res.json([
    { id: 1, name: 'John', city: 'Sydney' }
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});