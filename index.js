const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  // when it get '/' it will send this message
  res.send("Hello from node API");
});
