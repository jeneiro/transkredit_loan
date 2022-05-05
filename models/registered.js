module.exports = (sequelize, DataTypes) => {
    const Registered = sequelize.define("Registered", {
      isRegistered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      AuthId:{
        type: DataTypes.INTEGER,
        required:true,
       
    },
   
    })
    return Registered
    }

