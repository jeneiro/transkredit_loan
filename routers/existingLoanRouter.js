const router = require("express").Router();
const existingLoanController = require("../controllers/existingLoanController")

router.post("/",existingLoanController.addExistingLoan);

module.exports = router;