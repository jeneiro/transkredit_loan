const router = require("express").Router();
const NextOfKin = require("../controllers/nextOfKinController")

router.post("/",NextOfKin.addNextOfKin);

module.exports = router;