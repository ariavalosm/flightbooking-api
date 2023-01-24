const express = require("express");
const app = express();

app.get("/", (req, res) =>{
  res.send("Hello, world");
});

app.get("/about", (req, res) =>{
  res.send("wenas");
});

app.get("/test", (req, res) =>{
  res.send("<h1>test</h1>");
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});