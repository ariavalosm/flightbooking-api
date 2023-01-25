const { Router } = require("express");
const router = Router();

const datos = require("../sample.json");

router.get("/datos", (req,res) =>{
  res.json("holi");
});

router.post("/", (req,res) =>{
  console.log(req.body)
  res.send("holi");
});


module.exports = router;