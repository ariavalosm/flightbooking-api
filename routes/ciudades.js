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
    res.json(trips);
  } else {
    res.status(500).json({error : "hay un error"});
  }

});

router.put('/:id', (req, res) =>{
 
});


router.delete("/:id", (req, res) => {

});

module.exports = router;