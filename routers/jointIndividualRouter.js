const router = require("express").Router();
const jointIndividualController = require("../controllers/jointIndividualController")

router.post("/",jointIndividualController.addJointIndividual);

module.exports = router;