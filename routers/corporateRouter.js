const router = require("express").Router();
const corporateController = require("../controllers/corporateController")

const auth = require("../middleware/auth");
router.post("/",auth,corporateController.addCorporate);

module.exports = router;