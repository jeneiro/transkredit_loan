const router = require("express").Router();
const loanController = require("../controllers/loanController")

router.get("/all-pending-loans",loanController.getAllPendingLoanList);
router.post("/approve-loan-request/:id",loanController.ApproveLoanRequest);
router.post("/reject-loan-request/:id",loanController.RejectLoanRequest);
router.get("/all-approved-loans",loanController.getAllApprovedLoan);
router.post("/complete-repayment/:id",loanController.completeRepayment);



module.exports = router;