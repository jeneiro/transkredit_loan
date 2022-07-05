const router = require("express").Router();
const jointIndividualController = require("../controllers/jointIndividualController")

const auth = require("../middleware/auth");
router.post("/:id",auth,jointIndividualController.addJointIndividual);
router.get("/:id",auth,jointIndividualController.getJointIndividual);
module.exports = router;