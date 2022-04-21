const { Director } = require("../models");

//add Passport
const addDirector = async (req, res) => {
  try {
    const {
      title,
      name,
      email,
      bvn,
      dob,
      address,
      motherMaidenName,
      date,
      phone,
      CorporateId,
      maritalStatus,
      gender,
      stateOfOrigin,
      nationality,
      meansOfID,
      IDnumber,
      issuanceDate,
      expiryDate,
      tin,
    } = req.body;
    const director = await Director.create({
        title:title,
      name: name,
      email: email,
      bvn: bvn,
      dob: dob,
      address: address,
      motherMaidenName: motherMaidenName,
      date: date,
      phone: phone,
      CorporateId: CorporateId,
      maritalStatus: maritalStatus,
      gender: gender,
      stateOfOrigin: stateOfOrigin,
      nationality: nationality,
      meansOfID: meansOfID,
      IDnumber: IDnumber,
      issuanceDat: issuanceDate,
      expiryDate: expiryDate,
      tin: tin,
    });
    res.status(200).json({ msg: "success" }).send(director);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};

module.exports = { addDirector };
