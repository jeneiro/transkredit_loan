const {JointNextOfKin} = require("../models");
//add Next Of Kin
const addJointNextOfKin = async (req, res) => {
    try {
      const { name, email, relationship, phone,address, IndividualId } = req.body;
      const jointNextOfKin = await JointNextOfKin.create({
        IndividualId: IndividualId,
        name: name,
        phone:phone,
        address:address,
        email:email,
        relationship:relationship
       
      });
      res.status(200).json({ msg: "success" }).send(jointNextOfKin);
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }
  };

  
  module.exports = { addJointNextOfKin};