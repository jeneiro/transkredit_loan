const router = require("express").Router();
const corporateController = require("../controllers/corporateController")

router.post("/",corporateController.addCorporate);

module.exports = router;