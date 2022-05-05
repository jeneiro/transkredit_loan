const router = require("express").Router();
const jointIndividualController = require("../controllers/jointIndividualController")

const auth = require("../middleware/auth");
router.post("/",auth,jointIndividualController.addJointIndividual);

module.exports = router;