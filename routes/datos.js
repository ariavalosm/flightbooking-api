const { Router } = require("express");
const router = Router();

const datos = require("../sample.json");

router.get("/", (req,res) =>{
  res.json(datos);
});

router.post("/", (req,res) =>{
  const { name, lastname, nationality, doctype, docnumber } = req.body;
  if(name && lastname && nationality && doctype && docnumber){
    const id = datos.length +1;
    const newData = {... req.body, id}
    datos.push(newData);
    res.json(datos)
  } else {
    res.status(500).json({error : "hay un error"});
  }

});


module.exports = router;