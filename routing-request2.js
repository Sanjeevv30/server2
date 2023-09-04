const path = require('path');

const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUs = require('./routes/contact')

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use( shopRoutes); 
app.use(contactUs)


// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// });

app.use((req, res, next) => {
res.status(200).sendFile(path.join(__dirname,'views','success.html'))
});

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
