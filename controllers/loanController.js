const { Loan } = require("../models");
//add Next Of Kin
const addLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      loanAmount,
      loanType,
      repaymentMode,
      existingLoan,
      IndividualId,
      tenor,
      CorporateId,
    } = req.body;
    const loan = await Loan.create({
      date: Date.now(),
      loanAmount: loanAmount,
      loanType: loanType,
      repaymentMode: repaymentMode,
      existingLoan: existingLoan,
      IndividualId: IndividualId,
      tenor: tenor,
      CorporateId: CorporateId,
      AuthId: id,
    });
    res.status(200).json({ msg: "success" }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};

const getPendingLoanListByCorporateId = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.findAll({
      where: { CorporateId: id, status: "Pending" },
    });
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const getLoanList = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.findAll({ where: { AuthId: id } });
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const getAllPendingLoanList = async (req, res) => {
  try {
    const loan = await Loan.findAll({ where: { status: "Submitted" } });
    return res.status(200).json({ data:loan });
  } catch (err) {
    console.log(err);

   return res.status(500).send(err);
  }
};
const getAllApprovedLoan= async (req, res) => {
  try {
    const loan = await Loan.findAll({ where: { status: "Approved" } });
    return res.status(200).json({ data:loan });
  } catch (err) {
    console.log(err);

   return res.status(500).send(err);
  }
};
const getApprovedLoanList = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.findAll({
      where: { AuthId: id, status: "Approved" },
    });
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const getSettledLoanList = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.findAll({
      where: { AuthId: id, repaymentStatus: "Completed" },
    });
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const SubmitLoanRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.update(
      { status: "Submitted" },
      { where: { id: id } }
    );
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const completeRepayment = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.update(
      {  repaymentStatus: "Completed" },
      { where: { id: id } }
    );
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const ApproveLoanRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.update(
      { status: "Approved", repaymentStatus: "Ongoing" },
      { where: { id: id } }
    );
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const RejectLoanRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.update(
      { status: "Rejected" },
      { where: { id: id } }
    );
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};

const getLoanListByCorporateId = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Loan.findAll({ where: { CorporateId: id } });
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
module.exports = {
  addLoan,
  getLoanList,
  getApprovedLoanList,
  ApproveLoanRequest,
  getAllPendingLoanList,
  RejectLoanRequest,
  getLoanListByCorporateId,
  getSettledLoanList,
  getPendingLoanListByCorporateId,
  SubmitLoanRequest,
  getAllApprovedLoan,
  completeRepayment
};
