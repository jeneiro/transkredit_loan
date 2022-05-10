const router = require("express").Router();
const corporativeController = require("../controllers/corporativeController")

const auth = require("../middleware/auth");
router.post("/:id",auth,corporativeController.addCorporative);
router.get("/:id",auth,corporativeController.getCorporative)
router.get("/",auth,corporativeController.getAllCorporative)

module.exports = router;