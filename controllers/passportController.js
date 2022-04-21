const { Passport } = require("../models");

//add Passport
const addPassport = async (req, res) => {
    try {
      const { IndividualId, passport } = req.body;
      const newpassport = await Passport.create({
        IndividualId: IndividualId,
        passport: passport,
       
      });
      res.status(200).json({ msg: "success" }).send(newpassport);
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }
  };

  module.exports = { addPassport};