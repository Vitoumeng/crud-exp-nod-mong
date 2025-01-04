const express = require("express");
// create express routes
const router = express.Router();
// use controller
const { getProducts } = require("../controller/product.controller");

// Get all products
router.get("/", getProducts);

// Export Router
module.exports = router;
