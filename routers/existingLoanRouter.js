const router = require("express").Router();
const existingLoanController = require("../controllers/existingLoanController")

const auth = require("../middleware/auth");
router.post("/",auth,existingLoanController.addExistingLoan);

module.exports = router;