const { Router } = require("express");
const router = Router();

const datos = require("../sample.json");

router.get("/", (req,res) =>{
  res.json(datos);
});

router.post("/", (req,res) =>{
  const id = datos.length +1;
  const { name, lastname, nationality, doctype, docnumber } = req.body;
  const newData = {... req.body, id}
  if(name && lastname && nationality && doctype && docnumber){
    datos.push(newData);
    res.json(datos);
  } else {
    res.status(500).json({error : "hay un error"});
  }
});

router.delete("/:id", (req, res) => {
  
})


module.exports = router;