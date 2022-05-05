const {NextOfKin} = require("../models");
//add Next Of Kin
const addNextOfKin = async (req, res) => {
    try {
      const {id}=req.params;
      const { name, email, relationship, phone,address } = req.body;
      const nextOfKin = await NextOfKin.create({
        IndividualId: id,
        name: name,
        phone:phone,
        address:address,
        email:email,
        relationship:relationship
       
      });
      res.status(200).json({ msg: "success" }).send(nextOfKin);
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }
  };

  
  module.exports = { addNextOfKin};