const { LoanSchedule } = require("../models");

const addLoanSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await req.body.map((i) => {
      LoanSchedule.create({
        date: Date.now(),
        month: i.months,
        monthlyAmount: i.amount,
        LoanId: id,
      });
    });
    return res.status(200).json({ msg: "success", data: loan });
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
const getLoanScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const loanSchedule = await LoanSchedule.findAll({
      where: { LoanId: id },
    });
    return res
      .status(200)
      .json({ msg: "success", data: loanSchedule })
   
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
const approveLoanScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const loanSchedule = await LoanSchedule.update(
      { status: "Paid" },{
      where: { id: id },
    });
    return res
      .status(200)
      .json({ msg: "success", data: loanSchedule })
   
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
module.exports = {
  addLoanSchedule,
  getLoanScheduleById,
  approveLoanScheduleById
};
