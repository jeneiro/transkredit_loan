const { InterestRate } = require("../models");

const addInterestRate = async (req, res) => {
  try {
    const { rate } = req.body;
    const date = Date.now();

    const interest = await InterestRate.create({
      date: date,
      rate: rate,
    });

    return res.status(200).json({ data: interest });
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
const getInterestRate = async (req, res) => {
  try {
    const interest = await InterestRate.findAll({
      limit: 1,
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({ msg: "success", data: interest })
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
module.exports = {
  addInterestRate,
  getInterestRate,
};
