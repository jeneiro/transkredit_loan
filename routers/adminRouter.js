const router = require("express").Router();
const loanController = require("../controllers/loanController")
const procedure = require("../procedures/userProcedure")

router.get("/all-pending-loans",loanController.getAllPendingLoanList);
router.post("/approve-loan-request/:id",loanController.ApproveLoanRequest);
router.post("/reject-loan-request/:id",loanController.RejectLoanRequest);
router.get("/all-approved-loans",loanController.getAllApprovedLoan);
router.get("/all-approved-loans",loanController.getAllApprovedLoan);
router.post("/complete-repayment/:id",loanController.completeRepayment);
router.get("/email", procedure.user)
router.get("/individual-detail/:id", procedure.individualDetail)
router.get("/all-individual-accounts",procedure.allIndividualAccounts);
router.get("/all-corporate-accounts",procedure.allCorporateAccounts);
router.get("/all-cooporative-member-accounts",procedure.allCooporativeMemberAccounts);



module.exports = router;