const { Corporate } = require("../models");

//add Passport
const addCorporate = async (req, res) => {
  try {
    const {id} =req.params
    const {
      category,
      companyName,
      doi,
      registrationNumber,
      countryOfRegistration,
      date,
      typeOfBusiness,
      sector,
      OperatingAddress,
      CorporateAddress,
      email,
      phoneNumber,
      scumlRegNo,
      tin,
      
    } = req.body;
    const corporate = await Corporate.create({
      category: category,
      companyName: companyName,
      doi: doi,
      date: Date.now(),
      registrationNumber: registrationNumber,
      countryOfRegistration: countryOfRegistration,
     
      typeOfBusiness: typeOfBusiness,
      sector: sector,
      OperatingAddress: OperatingAddress,
      CorporateAddress: CorporateAddress,
      email: email,
      phoneNumber: phoneNumber,
      scumlRegNo: scumlRegNo,
      tin: tin,
      isCorporative:true,
      AuthId:id,
     
    });
   return res.status(200).json({ msg: "success", corporate:corporate }).send(corporate);
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};
const getCorporate =async(req,res)=>{
  try {
    const { id } = req.params;
    const corporate = await Corporate.findOne({ where: { AuthId: id } });
    return res
      .status(200)
      .json({ msg: "success", corporate: corporate })
    
  } catch (error) {
    return res.status(500).send(error);
  }
 
}



module.exports = { addCorporate, getCorporate };
