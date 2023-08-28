// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
//       res.write("<html>");
//       res.write("<head><title>Enter Message</title></head>");
//       res.write(
//         '<body><form action ="/message" method="POST"><input type ="text" name="message"><button type="submit">Send</button></input></form></body>'
//       );
//       res.write("</html>");
//       return res.end();
//     });
//   } else if (url === "/message" && method === "POST") {
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     return req.on("end", () => {
//       const parseBody = Buffer.concat(body).toString();
//       const message = parseBody.split("=")[1];
//       fs.writeFileSync("message.txt", message, (err) => {
//         console.log(`inside fs file`);
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//       });
//     });
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My-first page</title></head>");
//   res.write("<body><h1>Welcome to node.js Project</h1></body>");
//   res.write("</html>");
//   res.end();
//   res.end();
// });

// server.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });


// const http = require("http");
// const fs = require("fs");
// const querystring = require("querystring");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
  
//   if (url === "/") {
//     fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
//       if (err) {
//         console.error(err);
//         res.statusCode = 500;
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html>");
//         res.write("<head><title>Error</title></head>");
//         res.write("<body><h1>Internal Server Error</h1></body>");
//         res.write("</html>");
//         return res.end();
//       }

//       const messageArray = data.split("\n").filter(message => message.trim() !== '');

//       res.setHeader("Content-Type", "text/html");
//       res.write("<html>");
//       res.write("<head><title>Enter Message</title></head>");
//       res.write(
//         '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
//       );

//       for (const message of messageArray) {
//         res.write(`<div>${message}</div>`);
//       }

//       res.write("</body></html>");
//       return res.end();
//     });
//   } else if (url === "/message" && method === "POST") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const parsedData = querystring.parse(body);
//       const message = parsedData.message;

//       fs.appendFileSync("message.txt", message + "\n");

//       res.statusCode = 302;
//       res.setHeader("Location", "/");
//       return res.end();
//     });
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My-first page</title></head>");
//     res.write("<body><h1>Welcome to node.js Project</h1></body>");
//     res.write("</html>");
//     res.end();
//   }
// });

// server.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });
// const http = require("http");
// const fs = require("fs");
// const querystring = require("querystring");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
  
//   if (url === "/") {
//     fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
//       if (err) {
//         console.error(err);
//         res.statusCode = 500;
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html>");
//         res.write("<head><title>Error</title></head>");
//         res.write("<body><h1>Internal Server Error</h1></body>");
//         res.write("</html>");
//         return res.end();
//       }

//       const messageArray = data.split("\n").filter(message => message.trim() !== '');

//       res.setHeader("Content-Type", "text/html");
//       res.write("<html>");
//       res.write("<head><title>Enter Message</title></head>");
//       res.write(
//         '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
//       );

//       res.write("<div id='messages'>");
//       for (const message of messageArray.reverse()) {
//         res.write(`<div>${message}</div>`);
//       }
//       res.write("</div>");

//       res.write("</body></html>");
//       return res.end();
//     });
//   } else if (url === "/message" && method === "POST") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const parsedData = querystring.parse(body);
//       const message = parsedData.message;

//       fs.appendFileSync("message.txt", message + "\n");

//       res.statusCode = 302;
//       res.setHeader("Location", "/");
//       return res.end();
//     });
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My-first page</title></head>");
//     res.write("<body><h1>Welcome to node.js Project</h1></body>");
//     res.write("</html>");
//     res.end();
//   }
// });

// server.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });


const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Error</title></head>");
        res.write("<body><h1>Internal Server Error</h1></body>");
        res.write("</html>");
        return res.end();
      }

      const messageArray = data.split("\n").filter(message => message.trim() !== '');

      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
      );

      if (messageArray.length > 0) {
        const latestMessage = messageArray[messageArray.length - 1];
        res.write(`<div>${latestMessage}</div>`);
      }

      res.write("</body></html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const parsedData = querystring.parse(body);
      const message = parsedData.message;

      fs.writeFile("message.txt", message + "\n", (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "text/html");
          res.write("<html>");
          res.write("<head><title>Error</title></head>");
          res.write("<body><h1>Internal Server Error</h1></body>");
          res.write("</html>");
          return res.end();
        }

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My-first page</title></head>");
    res.write("<body><h1>Welcome to node.js Project</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
