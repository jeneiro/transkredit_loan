const { Corporative } = require("../models");


const addCorporative = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const corporative = await Corporative.create({
      name: name,
      CorporateId: id,
    });
    return res
      .status(200)
      .json({ msg: "success", corporative:corporative })
      .send(corporative);
  } catch (err) {
    console.log(err);
  res.status(500).send(err);
  }
  return;
};

const getCorporative = async (req, res) => {
    try {
      const { id } = req.params;
      const corporative = await Corporative.findOne({ where: { CorporateId: id } });
      return res
        .status(200)
        .json({ msg: "success", corporative: corporative })
        .send(corporative);
    } catch (error) {
      return res.status(500).send(error);
    }
  };
  
const getAllCorporative = async (req, res) => {
    try {
      const { id } = req.params;
      const corporative = await Corporative.findAll();
      return res
        .status(200)
        .json({ msg: "success", corporative: corporative })
        .send(corporative);
    } catch (error) {
      return res.status(500).send(error);
    }
  };
  

module.exports = { addCorporative, getCorporative, getAllCorporative };