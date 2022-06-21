const router = require("express").Router();
const passport = require("../controllers/passportController")
const auth = require("../middleware/auth");

router.post("/:id",auth,passport.addPassport);
router.get("/:id",auth,passport.getPassport);

module.exports = router;