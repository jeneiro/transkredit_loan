const { Passport } = require("../models");
const {Registered}=require("../models");
//add Passport
const addPassport = async (req, res) => {
    try {
      const {id}=req.params;
      const {photo } = req.body;
      const newpassport = await Passport.create({
        IndividualId: id,
        passport: photo,
       
      });
    
    return  res.status(200).json({ msg: "success",  passport:newpassport}).send(newpassport);
    } catch (err) {
      console.log(err);
  
     return res.status(500).send(err);
    }
  };

  module.exports = { addPassport};