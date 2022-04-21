const { Corporate } = require("../models");

//add Passport
const addCorporate = async (req, res) => {
  try {
    const {
      category,
      companyName,
      doi,
      registrationName,
      countryOfRegistration,
      date,
      typeOfBusiness,
      sector,
      OperatingAddress,
      corporateAddress,
      email,
      phoneNumber,
      scumlRegNo,
      tin,
      isCorporative
    } = req.body;
    const corporate = await Corporate.create({
      category: category,
      companyName: companyName,
      doi: doi,
      registrationName: registrationName,
      countryOfRegistration: countryOfRegistration,
      date: date,
      typeOfBusiness: typeOfBusiness,
      sector: sector,
      OperatingAddress: OperatingAddress,
      corporateAddress: corporateAddress,
      email: email,
      phoneNumber: phoneNumber,
      scumlRegNo: scumlRegNo,
      tin: tin,
      isCorporative:isCorporative
    });
    res.status(200).json({ msg: "success" }).send(corporate);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};

module.exports = { addCorporate };
