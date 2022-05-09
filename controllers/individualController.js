const { Individual } = require("../models");
const {Registered} = require("../models");

//add Next Of Kin
const addIndividual = async (req, res) => {
  try {
    const {id} = req.params
    console.log(id)
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
      expiryDate,
      tin,
      onlineAccess,
    } = req.body;
    const existingIndividual = await Individual.findOne({ where: { AuthId: id } });
    if (existingIndividual) {
      return res
        .status(400)
        .json({ "errorMessage": "Individual already filled form" });
    }

    const individual = await Individual.create({
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
      onlineAccess: onlineAccess,
      AuthId:id
    });

    //
    return res.status(200).json({ msg: "success", individual:individual}).send(individual);
  } catch (err) {
    console.log(err);

    res.status(500).json({err:err, msg: "Please fill all required fields" });
  }
};
 const getIndividual =async (req,res)=>{
   try {
     const {id}= req.params
     const individual= Individual.findOne({where:{AuthId:id}})
     return res.status(200).json({ msg: "success", individual:individual}).send(individual);
   } catch (err) {
    
    console.log(err);

    res.status(500).json({err:err}); 
   }
 }
module.exports = { addIndividual , getIndividual};
