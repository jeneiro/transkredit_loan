const {Loan} = require("../models");
//add Next Of Kin
const addLoan = async (req, res) => {
    try {
      const { loanAmount, loanType, repaymentMode,existingLoan, IndividualId, tenor } = req.body;
      const loan = await Loan.create({
        date: Date.now(),
        loanAmount: loanAmount,
        loanType:loanType,
        repaymentMode:repaymentMode,
        existingLoan:existingLoan,
        IndividualId:IndividualId,
        tenor:tenor
       
      });
      res.status(200).json({ msg: "success" }).send(loan);
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }
  };

  
  module.exports = { addLoan};