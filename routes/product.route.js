const express = require("express");
// create express routes
const router = express.Router();
// use controller
const {
  getProducts,
  updateProductById,
  createProduct,
  getProductById,
  deleteProductById,
} = require("../controller/product.controller");

// Get all products
router.get("/", getProducts);

// Get product by id
router.get("/:id", getProductById);

// Create product
router.post("/", createProduct);

// Update product by id
router.put("/:id", updateProductById);

// Delete product by id
router.delete("/:id", deleteProductById);

// Export Router
module.exports = router;
