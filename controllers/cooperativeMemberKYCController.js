const { CooperativeMemberKYC } = require("../models");

//add Passport
const addCooperativeMemberKYC = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      bankName,
      accountNumber,
      accountName,
      phone,
      bvn,
      meansOfID,
      IDnumber,
      expiryDate,
      issuanceDate,
      address,
    } = req.body;
    const exist = await CooperativeMemberKYC.findOne({ where: { AuthId: id } });
    if (exist) {
      const kyc = await CooperativeMemberKYC.update(
        {
          bankName: bankName,
          accountNumber: accountNumber,
          accountName: accountName,
          phone: phone,
          issuanceDate: issuanceDate,
          expiryDate: expiryDate,
          IDnumber: IDnumber,
          bvn: bvn,
          meansOfID: meansOfID,
          address: address,
        },
        { where: { AuthId: id } }
      );
      return res.json({ data: kyc });
    }

    const kyc = await CooperativeMemberKYC.create({
      AuthId: id,
      bankName: bankName,
      accountNumber: accountNumber,
      accountName: accountName,
      phone: phone,
      issuanceDate: issuanceDate,
      expiryDate: expiryDate,
      IDnumber: IDnumber,
      bvn: bvn,
      meansOfID: meansOfID,
      address: address,
    });
    return res.status(200).json({ msg: "success", data: kyc });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const getCooperativeMemberKYC = async (req, res) => {
  try {
    const { id } = req.params;

    const getKYC = await CooperativeMemberKYC.findOne({ where: { Auth: id } });
    return res.status(200).json({ msg: "success", data: getKYC });
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};

module.exports = { addCooperativeMemberKYC, getCooperativeMemberKYC };
