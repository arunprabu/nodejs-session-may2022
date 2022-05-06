// Server Side Rendering Website 
const http = require('http');

const getTemplate = (pageName) => {
  return `<html>
  <head>
    <title>Welcome to My first NodeJS Website</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <h1>Welcome to ${pageName} Page!</h1>
  </body>
  </html>`;
}

http.createServer( (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  switch(req.url){
    case '/':
      res.end(getTemplate('Home'));
      break;

    case '/about':
      res.end(getTemplate('About'));
      break;

    case '/contact':
      res.end(getTemplate('Contact'));
      break;

    case '/users':
      res.setHeader('Content-Type', 'application/json');
      res.end(`[{
        id: 1,
        name: 'John',
        phone: 2341234
      }]`);
      break;

    default:
      res.statusCode = 404;
      res.end(getTemplate('404'));
  }

}).listen( 3000 , () => {
  console.log('Server started on localhost:3000');
})