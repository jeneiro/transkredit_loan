const router = require("express").Router();
const loan = require("../controllers/loanController");
const auth = require("../middleware/auth");

router.post("/:id", auth, loan.addLoan);
router.get("/:id", auth, loan.getLoanListByCorporateId);
router.get("/approved-loans/:id", auth, loan.getApprovedLoanList);
router.get("/settled-loans/:id", auth, loan.getSettledLoanList);
router.get("/loan-list/:id", auth, loan.getLoanList);
router.get("/corporate-settled/:id", auth, loan.getSettledLoanListCorporate);
router.get("/corporate-approved/:id", auth, loan.getApprovedLoanListCorporate);
router.post("/approve-loan-request/:id", auth, loan.ApproveLoanRequest);
router.post("/reject-loan-request/:id", auth, loan.RejectLoanRequest);
router.get("/corporate-loan-pending/:id",auth, loan.getPendingLoanListByCorporateId);
router.get("/all-pending", auth, loan.getAllPendingLoanList);
router.post("/submit-loan-request/:id", auth, loan.SubmitLoanRequest);

module.exports = router;
