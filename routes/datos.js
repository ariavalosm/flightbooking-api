const { Router } = require("express");
const router = Router();

router.get("/datos", (req,res) =>{
  res.json("holi");
});


module.exports = router;