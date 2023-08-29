const fs = require("fs");
const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
    
      return req.on("end", () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My-first page</title></head>");
    res.write("<body><h1>Welcome to node.js Project</h1></body>");
    res.write("</html>");
    res.end();
    
}

// module.exports = requestHandler;


// module.exports = {
//     handler : requestHandler,
//     someText : 'some hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';
//shortcut of above two lines...
exports.handler = requestHandler;
exports.someText = 'some hard coded text';