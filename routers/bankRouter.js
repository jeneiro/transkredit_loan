const router = require("express").Router();
const bankController = require("../controllers/bankController")

const auth = require("../middleware/auth");

router.post("/:id",auth,bankController.addBank);
module.exports = router;