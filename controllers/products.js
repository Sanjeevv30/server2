const path = require("path");

const rootDir = require("../util/path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};

exports.getContact = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.postContact = (req, res, next) => {
  const { name, email } = req.body;
  console.log(`Received data: Name - ${name}, Email - ${email}`);

  res.redirect("/success");
};
