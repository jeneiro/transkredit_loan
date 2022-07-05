const { JointIndividual } = require("../models");
//add Next Of Kin
const addJointIndividual = async (req, res) => {
  try {
    const {id} =req.params;
    const {
      title,
      name,
      email,
      bvn,
      dob,
      address,
      motherMaidenName,
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
     
    } = req.body;
    const jointindividual = await JointIndividual.create({
      AuthId:id,
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
      date: Date.now(),
      maritalStatus: maritalStatus,
      gender: gender,
      stateOfOrigin: stateOfOrigin,
      nationality: nationality,
      meansOfID: meansOfID,
      IDnumber: IDnumber,
      issuanceDate: issuanceDate,
      expiryDate: expiryDate,
      tin: tin,
    
    });
    res.status(200).json({ msg: "success", data:jointindividual});
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
const getJointIndividual =async (req, res) =>{
  try {
    const { id}= req.params;
    const jointindividual = await JointIndividual.findOne({ where:{AuthId:id}  });
    return res.status(200).json({data:jointindividual});
    
  } catch (err) {
    return res.status(500).send(err);
  }
}
module.exports = { addJointIndividual, getJointIndividual };
