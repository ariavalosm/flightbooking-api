const { Router } = require("express");
const router = Router();

const cities = require("../cities.json");

router.get("/", (req,res) =>{
  res.json(cities);
});

module.exports = router;