const { InterestRate } = require("../models");

const addInterestRate = async (req, res) => {
  try {
  
    const { rate } = req.body;
    const interest = await InterestRate.create({
      date: Date.now(),
      rate: rate,
    });

    return res.status(200).json({ msg: "success", data: interest });
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
const getInterestRate = async (req, res) => {
  try {
   
    const interest = await InterestRate.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
      })
    return res
      .status(200)
      .json({ msg: "success", data: interest })
      .send(loan);
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
module.exports = {
    addInterestRate,
    getInterestRate,
};
