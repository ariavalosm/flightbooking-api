const { Router } = require("express");
const router = Router();

const datos = require("../sample.json");

router.get("/datos", (req,res) =>{
  res.json("holi");
});

router.post("/", (req,res) =>{
  const { name, lastname, nationality, doctype, docnumber } = req.body;
  if(name && lastname && nationality && doctype && docnumber){
    res.json("saved");
  } else {
    res.send("wrong request");
  }
  res.send("holi");
});


module.exports = router;