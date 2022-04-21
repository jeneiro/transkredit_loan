const { Bank } = require("../models");

//add Passport
const addBank = async (req, res) => {
  try {
    const { bankName, accountNumber, accountName, IndividualId } = req.body;
    const bank = await Bank.create({
      IndividualId: IndividualId,
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
