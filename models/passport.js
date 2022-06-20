module.exports = (sequelize, DataTypes) => {
    const Passport = sequelize.define("Passport", {
      passport: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    
      IndividualId:{
        type: DataTypes.INTEGER,
       
    },
    AuthId:{
      type: DataTypes.INTEGER,
     
  }
    })
    return Passport
    }

