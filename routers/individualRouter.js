const router = require("express").Router();
const individualController = require("../controllers/individualController");
const auth = require("../middleware/auth");

router.post("/:id", auth, individualController.addIndividual);
router.get("/:id", auth, individualController.getIndividual);

module.exports = router;
