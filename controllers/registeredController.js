const { Registered } = require("../models");

//add Passport
const addRegister = async (req, res) => {
    try {
      const {id} = req.params
      const {isRegistered} = req.body
     
      const register = await Registered.create({
        AuthId: id,
        isRegistered: isRegistered,
      });
      return res.status(200).json({ msg: "success" }).send("isRegistered"+register);
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }return 
  };

  const getRegistered = async(req, res)=>{

    try {
        const { id } = req.params;
        
        const registered = await Registered.findOne({where: { AuthId: id }} );   
       return  res.status(200).json({ msg: "success", registered:registered}).send(registered);
    } catch (error) {
      
  
      return  res.status(500).send(error);
    }
  }

  module.exports = { addRegister, getRegistered};