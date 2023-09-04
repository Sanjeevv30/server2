const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();

const productsController = require('../controllers/products')

router.get("/contactus", productsController.getContact);

router.post("/contactus", productsController.postContact);

module.exports = router;
