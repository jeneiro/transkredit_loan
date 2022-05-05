const { Bank } = require("../models");

//add Passport
const addBank = async (req, res) => {
  try {
    const {id}=req.params;
    const { bankName, accountNumber, accountName } = req.body;
    const bank = await Bank.create({
      IndividualId: id,
      bankName: bankName,
      accountNumber: accountNumber,
      accountName: accountName,
    });
    res.status(200).json({ msg: "success" }).send(bank);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};

module.exports = { addBank };
