var express = require("express");
const router = express.Router();
const Student = require("../models/Students");

router.get("/login", (req, res) => {
  res.render("student/login");
});
router.post("/login", async (req, res) => {

    const Stuname = req.body.name;
    const Sturoll = req.body.roll;
    const individualStudent2 = await Student.findOne({roll : Sturoll});
    const individualStudent = await Student.findOne({name : Stuname});
    if(!individualStudent2){
      res.render("student/login", {
        error : "Enter The Correct Registration No"
      })
    }
  
    res.render("student/view", { one : individualStudent2})
});

module.exports = router;
