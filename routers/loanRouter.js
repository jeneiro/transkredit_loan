const router = require("express").Router();
const loan= require("../controllers/loanController")

router.post("/",loan.addLoan);

module.exports = router;