const express = require("express");
const app = express();

app.listen(3000, () => {
  // when we go this port it will show this message
  console.log("Server running on port 3000");
});
