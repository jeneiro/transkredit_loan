const router = require("express").Router();
const register = require("../controllers/registeredController")
const auth = require("../middleware/auth");

router.post("/:id",register.addRegister);
router.get("/:id",register.getRegistered);
router.put("/:id", register.updateRegistered)

module.exports = router;