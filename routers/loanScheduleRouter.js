const router = require("express").Router();
const loan = require("../controllers/loanScheduleController")
const auth = require("../middleware/auth");

router.post("/:id",auth,loan.addLoanSchedule);
router.get("/:id",auth,loan.getLoanScheduleById);
router.post("/approve/:id",auth,loan.approveLoanScheduleById)

module.exports = router;