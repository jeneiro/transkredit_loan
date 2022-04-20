const { Auth } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("@sequelize/core");
//add user
const register = async (req, res) => {
  try {
    const { email, username, password, verifypassword } = req.body;
    if (!email || !password || !username || !verifypassword) {
      res
        .status(400)
        .json({ "error message": "please enter all required fields" })
        .send();
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ "error message": "Password should be at least 6 characters" })
        .send();
    }
    if (password != verifypassword) {
      return res
        .status(400)
        .json({ "error message": "Password does not match verified Password" });
    }
    const existingUser = await Auth.findOne({ where: { email: email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ "error message": "Account with this email exist" });
    }

    //hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //save new user
    const isAdmin = false;
    // const newUser = new Auth();
    const saveuser = await Auth.create({
      email: email,
      username: username,
      passwordharsh: passwordHash,
      isAdmin: isAdmin,
    });
    const savedUser = await Auth.findOne({ where: { email: email } });

    //sign the token
    const token = jwt.sign(
      {
        user: saveuser.id,
      },
      process.env.JWT_SECRET
    );
    const userPayload = { userD: savedUser, token: token };

    //use cookies

    return res.send(userPayload);
  } catch (err) {
    res.status(500).send();
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await Auth.destroy({ where: { id: id } });
    return res.send(id + "deleted");
  } catch (err) {
    return res.status(500).send();
  }
};


//login controller
const login = async (req, res) => {
  try {
    const { email, password, username } = req.body;
   
    if (!password) {
      
        return res
          .status(400)
          .json({ "error message": "please enter all required fields" })
          .send();
      }
      if (!email && !username) {
        return res
        .status(400)
        .json({ "error message": "please enter all required fields" })
        .send();
    }
    if(email){

        var existinguser = await Auth.findOne({
            where: {
              email: email 
            }
          });
    
    
        if (!existinguser) {
          return res
            .status(401)
            .json({ "error message": "Wrong Email or Password" })
            .send();
        }
       
       // verify if password is correct
        const passwordcorrect = await bcrypt.compare(
          password,
          existinguser.passwordharsh
        );
    
        if (!passwordcorrect) {
          return res
            .status(401)
            .json({ "error message": "Wrong Email or Password" })
            .send();
        }
    
        //sign token
        const token = jwt.sign(
          {
            user: existinguser._id,
          },
          process.env.JWT_SECRET
        );
        // create reusable transporter object using the default SMTP transport
    
        const userPayload = { userD: existinguser, token: token };
    
        //use cookies
        return res.send(userPayload);
    }
    if(username){

        var existinguser = await Auth.findOne({
            where: {
              username: username 
            }
          });
    
         
    
        if (!existinguser) {
          return res
            .status(401)
            .json({ "error message": "Wrong Email or Password" })
            .send();
        }
       
       // verify if password is correct
        const passwordcorrect = await bcrypt.compare(
          password,
          existinguser.passwordharsh
        );
    
        if (!passwordcorrect) {
          return res
            .status(401)
            .json({ "error message": "Wrong Email or Password" })
            .send();
        }
    
        //sign token
        const token = jwt.sign(
          {
            user: existinguser._id,
          },
          process.env.JWT_SECRET
        );
        // create reusable transporter object using the default SMTP transport
    
        const userPayload = { userD: existinguser, token: token };
    
        //use cookies
        return res.send(userPayload);
    }

  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).send();
  }
};
module.exports = { register, deleteAccount, login };
