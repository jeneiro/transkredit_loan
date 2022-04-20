const { User } = require("../models");

//add user
const addUser = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
    res.status(200).json({ msg: "success" }).send(user);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
//find all user
const findAllUser = async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(200).send(users);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
//find one user
const findOneUser = async (req, res) => {
    try {
        
    let id = req.params.id
    console.log(id)
      const users = await User.findOne({where :{id:id}});
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }
  };
module.exports = { addUser, findAllUser, findOneUser };
