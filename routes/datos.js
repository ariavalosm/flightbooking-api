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

router.put('/:id', (req, res) =>{
  const { id } = req.params;
  const { name, lastname, nationality, doctype, docnumber } = req.body;
  if(name && lastname && nationality && doctype && docnumber){
    _.each(datos, (dato, i) =>{
      if (datos.id === id) {
        dato.name = name;
        dato.lastname = lastname;
        dato.nationality = nationality;
        dato.doctype = doctype;
        dato.docnumber = docnumber;
    }
  });
      res.json(movies);
  } else {
      res.status(500).json({error : "hay un error"});
  }
  });


router.delete("/:id", (req, res) => {
  const { id } = req.params;
    if (id){
      _.each(datos, (dato, i) =>{
        if (dato.id == id){
          datos.splice(i ,1);
    } 
  });
    res.json(datos);
  }
});


module.exports = router;