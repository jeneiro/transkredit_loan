const router = require("express").Router();
const bankController = require("../controllers/bankController")


router.post("/",bankController.addBank);
module.exports = router;