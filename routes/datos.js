const { Router } = require("express");
const router = Router();

const datos = require("../sample.json");

router.get("/info", (req,res) =>{
  res.json("datos");
});

router.post("/", (req,res) =>{
  const { name, lastname, nationality, doctype, docnumber } = req.body;
  if(name && lastname && nationality && doctype && docnumber){
    datos.length +1;
    const newData = {... req.body}
    //datos.push();
    res.json("saved");
  } else {
    res.send("wrong request");
  }

});


module.exports = router;