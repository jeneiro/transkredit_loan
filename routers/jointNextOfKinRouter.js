const router = require("express").Router();
const jointNextOfKin = require("../controllers/jointNextOfKinController")

const auth = require("../middleware/auth");
router.post("/",auth, jointNextOfKin.addJointNextOfKin);

module.exports = router;