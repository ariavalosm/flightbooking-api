const { Router } = require("express");
const router = Router();
const _ = require('underscore');

const trips = require("../trip.json");

router.get("/", (req,res) =>{
  res.json(trips);
});

router.post("/", (req,res) =>{
  const { id } = req.params;
  const { desde, hacia, fechaSalida, fechaRetorno } = req.body;
  const newTrip = {... req.body, id}
  if (![desde, hacia, fechaSalida, fechaRetorno].includes("")){
    trips.push(newTrip);
    res.json(trips);
  } else {
    res.status(500).json({error : "hay un error"});
  }

});

router.put('/:id', (req, res) =>{
  const { id } = req.params;
  const { desde, hacia, fechaSalida, fechaRetorno } = req.body;
  if  (desde && hacia && fechaSalida && fechaRetorno){
  _.each(trips, (trip, i) =>{
      if (trips.id === id) {
        trip.desde = desde;
        trip.hacia = hacia;
        trip.fechaSalida = fechaSalida;
        trip.fechaRetorno = fechaRetorno;
    }
  });
      res.json(trips);
  } else {
      res.status(500).json({error : "hay un error"});
  }
  });


router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id){
    _.each(trips, (trip, i) =>{
      if (trip.id == id){
        trips.splice(i ,1);
  } 
});
  res.json(trips);
}
});

module.exports = router;