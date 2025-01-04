const express = require("express");
// create express routes
const router = express.Router();
// use controller
const { getProducts } = require("../controller/product.controller");

// Get all products
router.get("/", getProducts);

// Get product by id
router.get("/:id", getProductById);

// Create product
router.post("/", createProduct);

// Export Router
module.exports = router;
