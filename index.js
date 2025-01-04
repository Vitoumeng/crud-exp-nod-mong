const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Use route
const productRoute = require("./routes/product.route");

// ==========< middleware >============
// accept json data
app.use(express.json());

// accept form url endocding data
app.use(express.urlencoded({ extended: false }));

// ==========< routes >============
app.use("/api/products/", productRoute);

// put method / update product
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete product by id
app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://tuu18:v%21T0u%402025@backenddb.cbfsz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    app.listen(3000, () => {
      // when we go this port it will show this message
      console.log("Server running on port 3000");
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
