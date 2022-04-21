const { JointIndividual } = require("../models");
//add Next Of Kin
const addJointIndividual = async (req, res) => {
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
      IndividualId,
      maritalStatus,
      gender,
      stateOfOrigin,
      nationality,
      meansOfID,
      IDnumber,
      issuanceDate,
      relationship,
      expiryDate,
      tin,
      onlineAccess,
    } = req.body;
    const jointindividual = await JointIndividual.create({
      relationship: relationship,
      title: title,
      IndividualId: IndividualId,
      name: name,
      phone: phone,
      address: address,
      email: email,
      bvn: bvn,
      dob: dob,
      motherMaidenName: motherMaidenName,
      date: date,
      maritalStatus: maritalStatus,
      gender: gender,
      stateOfOrigin: stateOfOrigin,
      nationality: nationality,
      meansOfID: meansOfID,
      IDnumber: IDnumber,
      issuanceDate: issuanceDate,
      expiryDate: expiryDate,
      tin: tin,
      onlineAccess: onlineAccess,
    });
    res.status(200).json({ msg: "success" }).send(jointindividual);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};

module.exports = { addJointIndividual };
