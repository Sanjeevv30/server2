// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello');

//   console.log('Sanjeev srivastava');
// });

// const port = 4000;

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, my name is sanjeev srivastava');

  
  console.log('sanjeev srivastava');
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


