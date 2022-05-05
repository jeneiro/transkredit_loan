const router = require("express").Router();
const loan= require("../controllers/loanController")
const auth = require("../middleware/auth");

router.post("/",auth,loan.addLoan);

module.exports = router;