const { Router } = require("express");
const router = Router();

const cities = require("../cities.json");

router.get("/", (req,res) =>{
  res.json(cities);
});

router.post("/", (req,res) =>{

});

router.put('/:id', (req, res) =>{
 
});


router.delete("/:id", (req, res) => {

});

module.exports = router;