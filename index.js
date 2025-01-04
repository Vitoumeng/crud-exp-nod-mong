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
