const router = require("express").Router();
const loan = require("../controllers/loanScheduleController")
const auth = require("../middleware/auth");

router.post("/:id",auth,loan.addLoanSchedule);
router.get("/:id",auth,loan.getLoanScheduleById);

module.exports = router;