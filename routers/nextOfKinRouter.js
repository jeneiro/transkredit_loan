const router = require("express").Router();
const NextOfKin = require("../controllers/nextOfKinController")
const auth = require("../middleware/auth");

router.post("/:id",auth, NextOfKin.addNextOfKin);

module.exports = router;