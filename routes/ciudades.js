const { Router } = require("express");
const router = Router();

const trips = require("../trip.json");

router.get("/", (req,res) =>{
  res.json(cities);
});

router.post("/", (req,res) =>{
  const { id } = req.params;
  const { desde, hacia, fechaSalida, fechaRetorno } = req.body;
  const newTrip = {... req.body, id}
  if (![desde, hacia, fechaSalida, fechaRetorno].includes("")){
    trips.push(newTrip);
    res.json(cities);
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

});

module.exports = router;