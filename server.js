const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome home</title></head>');
        res.write('</html>');
        return res.end('Welcome home');
    }else if(url === '/about'){
        res.setHeader('Content-Type', 'text/html')
        res.end('Welcome to About us Page')
    }else if (url === '/node') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to my Node Js project');
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>404 - Not Found</title></head>');
        res.write('<body><h1>404 - Not Found</h1></body>');
        res.write('</html>');
        res.end();
    res.end();
    }
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});

// Answer the following questions;

// Node.js is built on an event-driven architecture that allows developers to create efficient and scalable applications.
// At the core of this architecture is the Event Loop, a central component that manages and coordinates the execution of asynchronous operations.
//  Here's how the event-driven architecture in Node.js works: 

// 1.Event Loop:
// 2.Event Emitters:
// 3.Event Handlers:
// 4.Callback Functions:
// 5.Event Queue:
// 6.Execution Phases:

//2.How can it basically scale to handle 1000 of requests a sec. What helps node JS even though it is single threaded?

// Node.js's ability to handle a large number of requests per second despite being single-threaded is primarily due to its non-blocking,
//event-driven architecture and the following key features:
// 1.Asynchronous I/O Operations:
// 2.Event Loop and Non-Blocking Design:
// 3.Minimal Overhead:

//3. What does process.exit do?
//ans= process.exit will exit your connection betwwn server and browsers

// 4.What does req.url , req.header and req.method contain?

// In the context of a Node.js web server using the built-in http module, the req (request) object represents the incoming HTTP request made by a client (usually a web browser or another application). The req object contains various properties and methods that provide information about the incoming request. Here's what req.url, req.headers, and req.method contain:

// req.url:

// req.url contains the URL portion of the incoming request.
// It includes the path and any query parameters.
// For example, if the client makes a request to http://example.com/home?q=test, then req.url would be /home?q=test.
// req.headers:

// req.headers is an object that contains all the HTTP headers sent by the client as part of the request.
// HTTP headers include information such as the user agent, content type, and more.
// You can access individual header values using their corresponding keys in the req.headers object.
// For example, req.headers['user-agent'] gives you the user agent header.
// req.method:

// req.method contains the HTTP method used by the client for the request.
// Common HTTP methods include GET, POST, PUT, DELETE, and more.
// You can use req.method to determine how to handle the request based on the desired action.
// For example, req.method might be 'GET' if the client is making a GET request.

