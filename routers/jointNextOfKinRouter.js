const router = require("express").Router();
const jointNextOfKin = require("../controllers/jointNextOfKinController")

router.post("/",jointNextOfKin.addJointNextOfKin);

module.exports = router;