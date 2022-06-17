const router = require("express").Router();
const interest = require("../controllers/interestRateController")
const auth = require("../middleware/auth");

router.post("/",auth,interest.addInterestRate);
router.get("/",auth,interest.getInterestRate);

module.exports = router;