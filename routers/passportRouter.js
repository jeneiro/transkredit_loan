const router = require("express").Router();
const passport = require("../controllers/passportController")

router.post("/",passport.addPassport);

module.exports = router;