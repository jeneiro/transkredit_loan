const router = require("express").Router();
const corporateController = require("../controllers/corporateController")

const auth = require("../middleware/auth");
router.post("/:id",auth,corporateController.addCorporate);
router.get("/:id",auth,corporateController.getCorporate)

module.exports = router;