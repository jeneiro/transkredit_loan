const router = require("express").Router();
const corporativeController = require("../controllers/corporativeController")

const auth = require("../middleware/auth");
router.post("/:id",auth,corporativeController.addCorporative);
router.get("/:id",auth,corporativeController.getCorporative)
router.get("/",auth,corporativeController.getAllCorporative)
router.put("/:id", auth,corporativeController.updateCooporative)


module.exports = router;