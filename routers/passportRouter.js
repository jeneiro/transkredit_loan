const router = require("express").Router();
const passport = require("../controllers/passportController")
const auth = require("../middleware/auth");

router.post("/:id",auth,passport.addPassport);

module.exports = router;