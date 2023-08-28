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
