const { Router } = require("express");
const router = Router();

const datos = require("../sample.json");

router.get("/datos", (req,res) =>{
  res.json("holi");
});


module.exports = router;