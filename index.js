const express = require("express");
const app = express();
const morgan = required ("morgan");

// middlewares(
app.use(morgan("combined"));

// starting the server
app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});