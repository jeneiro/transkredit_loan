const router = require("express").Router();
const individualController = require("../controllers/individualController");
const auth = require("../middleware/auth");

router.post("/:id", auth, individualController.addIndividual);

module.exports = router;
