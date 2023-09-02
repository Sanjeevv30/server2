const http = require("http");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("1st middileware");
  next();
});

app.use((req, res, next) => {
  console.log("2nd middileware");
  res.send("<h1>Hii Sanjeev How are you!</h1>");
});
const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
