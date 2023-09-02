const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST">' +
    '<input type="text" name="title" placeholder="Product Title"><br>' +
    '<input type="text" name="size" placeholder="Product Size"><br>' +
    '<button type="submit">Add Product</button>' +
    '</form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body); 
  res.redirect('/');
})

app.use((req, res, next) => {
  res.send("<h1>Hii Sanjeev How are you!</h1>");
});

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
