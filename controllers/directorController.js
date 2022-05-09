const { Director } = require("../models");

//add Passport
const addDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      name,
      email,
      bvn,
      dob,
      address,
      motherMaidenName,
      phone,
      maritalStatus,
      gender,
      stateOfOrigin,
      nationality,
      meansOfID,
      IDnumber,
      issuanceDate,
      expiryDate,
      tin,
      occupation,
      placeOfWork,
      natureOfBusiness,
      workAddress,
    } = req.body;
    const director = await Director.create({
      title: title,
      name: name,
      email: email,
      bvn: bvn,
      dob: dob,
      address: address,
      motherMaidenName: motherMaidenName,
      date: Date.now(),
      phone: phone,
      CorporateId: id,
      maritalStatus: maritalStatus,
      gender: gender,
      stateOfOrigin: stateOfOrigin,
      nationality: nationality,
      meansOfID: meansOfID,
      IDnumber: IDnumber,
      issuanceDate: issuanceDate,
      expiryDate: expiryDate,
      tin: tin,
      occupation: occupation,
      natureOfBusiness: natureOfBusiness,
      placeOfWork: placeOfWork,
      workAddress: workAddress,
      CorporateId: id,
    });
    return res
      .status(200)
      .json({ msg: "success", corporate: director })
      .send(director);
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
const getDirector = async (req, res) => {
  try {
    const { id } = req.params;

    const director = await Director.findAll({ where: { CorporateId: id } });
    return res
      .status(200)
      .json({ msg: "success", directors: director })
      .send(director);
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
module.exports = { addDirector, getDirector };
