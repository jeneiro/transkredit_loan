const { Registered } = require("../models");

//add Passport
const addRegister = async (req, res) => {
  try {
    const { id } = req.params;
    const { isRegistered, userType } = req.body;

    const register = await Registered.create({
      AuthId: id,
      isRegistered: isRegistered,
      userType:userType
    });
    return res
      .status(200)
      .json({ msg: "success" })
      .send("isRegistered" + register);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
  return;
};
//get Registered
const getRegistered = async (req, res) => {
  try {
    const { id } = req.params;
    const registered = await Registered.findOne({ where: { AuthId: id } });
    return res
      .status(200)
      .json({ msg: "success", registered: registered })
      .send(registered);
  } catch (error) {
    return res.status(500).send(error);
  }
};
const updateRegistered = async (req, res) => {
  try {
    const { id } = req.params;
    const { isRegistered, userType } = req.body;
    const registered = await Registered.update(
      { isRegistered: isRegistered,  userType:userType },
      { where: { AuthId: id } }
    );
    return res
      .status(200)
      .json({ msg: "success", registered: registered })
      .send(registered);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { addRegister, getRegistered, updateRegistered };
