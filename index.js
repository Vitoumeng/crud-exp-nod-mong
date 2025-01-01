const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/product.model.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  // when it get '/' it will send this message
  res.send("Hello from node New API");
});

// post method
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    // send message error as json
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://tuu18:v%21T0u%402025@backenddb.cbfsz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
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
