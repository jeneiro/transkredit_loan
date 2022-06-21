const { Passport } = require("../models");
const {Registered}=require("../models");
//add Passport
const addPassport = async (req, res) => {
    try {
      const {id}=req.params;
      const {photo, individualId } = req.body;
    
const exist = await Passport.findOne({where:{AuthId:id}});
if (exist){
  const updatepassport = await Passport.update({
    AuthId:id,
    IndividualId: individualId,
    passport: photo,
   
  }, {where:{AuthId:id}});
  return res .status(200).json({data:updatepassport});
}
      const newpassport = await Passport.create({
        AuthId:id,
        IndividualId: individualId,
        passport: photo,
       
      });
    
    return  res.status(200).json({ msg: "success", data: newpassport});
    } catch (err) {
      console.log(err);
  
     return res.status(500).send(err);
    }
  };

 const getPassport  = async (req, res) => {
    try {
      const{id} = req.params;
      const passport = await Passport.findOne({where:{ AuthId: id }})
      return res.status(200).json({data:passport})
      
    } catch (err) {
      console.log(err);
  
      return res.status(500).send(err);
    }
  }

  module.exports = { addPassport, getPassport};