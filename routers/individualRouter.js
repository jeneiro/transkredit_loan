const router = require("express").Router();
const individualController = require("../controllers/individualController")

router.post("/",individualController.addIndividual);

module.exports = router;