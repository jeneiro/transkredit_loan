const {WorkDetail} = require("../models");
//add Next Of Kin
const addWorkDetail = async (req, res) => {
    try {
      const {id}=req.params;
      const { sourceOfIncome, salaryRange, placeOfWork, natureOfBusiness,workAddress } = req.body;
      const workdetail = await WorkDetail.create({
        IndividualId: id,
        salaryRange: salaryRange,
        sourceOfIncome:sourceOfIncome,
        natureOfBusiness:natureOfBusiness,
        placeOfWork:placeOfWork,
        workAddress:workAddress
       
      });
      res.status(200).json({ msg: "success" }).send(workdetail);
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }
  };

  
  module.exports = { addWorkDetail};