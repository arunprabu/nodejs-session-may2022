const http = require('http');

http.createServer( (req, res) => {
  // handle the req and send the res 
  console.log('Req Received');

  //console.log(req); // we can find req obj here
  
  // process the req --- what's the url, method, req.body, params, query 
  switch( req.url){
    case '/':
      // let's send the res
      res.end(`<html>
      <head>
        <title>Welcome to My first NodeJS Website</title>
      </head>
      <body>
        <h1>Welcome to My Home Page!</h1>
      </body>
      </html>`);
      break;
    
    case '/about':
      // let's send the res
      res.end(`<html>
      <head>
        <title>Welcome to My first NodeJS Website</title>
      </head>
      <body>
        <h1>Welcome to My About Page!</h1>
      </body>
      </html>`);
      break;
    
    case '/contact':
      // let's send the res
      res.end(`<html>
      <head>
        <title>Welcome to My first NodeJS Website</title>
      </head>
      <body>
        <h1>Welcome to My Contact Page!</h1>
      </body>
      </html>`);
      break;

    default: 
      // let's send the res
      res.end(`<html>
      <head>
        <title>404 - Page Not Found!</title>
      </head>
      <body>
        <h1>404 - Page Not Found!</h1>
      </body>
      </html>`);
      break;
  }
}).listen( 3000, () => {
  console.log('Server is running on localhost:3000');
});