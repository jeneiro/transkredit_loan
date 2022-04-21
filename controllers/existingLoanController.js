const { ExistingLoan } = require("../models");

//add Passport
const addExistingLoan = async (req, res) => {
  try {
    const { lender, loanAmount, tenor, outstandingAmount, date, LoanId } =
      req.body;
    const existingLoan = await ExistingLoan.create({
      lender: lender,
      loanAmount: loanAmount,
      tenor: tenor,
      outstandingAmount: outstandingAmount,
      date: date,
      LoanId: LoanId,
    });
    res.status(200).json({ msg: "success" }).send(existingLoan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};

module.exports = { addExistingLoan };
