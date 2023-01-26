const express = require("express");
const app = express();
const morgan = required("morgan");

//settings
app.set("port", process.env.PORT || 3000);
app.set(express.json());

// middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes'));
app.use('/api/datos', require('./routes/datos'));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});