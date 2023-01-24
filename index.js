const express = require("express");
const app = express();

// middlewares(
app.use(morgan("combined"));


// starting the server
app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});