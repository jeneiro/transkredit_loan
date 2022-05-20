module.exports = (sequelize, DataTypes) => {
    const Registered = sequelize.define("Registered", {
      isRegistered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      userType: {
        type: DataTypes.ENUM("Individual", "Corporate", "Corporative Member", "Unregistered", "Admin"),
        defaultValue:"Unregistered",
        allowNull: false,
      
      },
      AuthId:{
        type: DataTypes.INTEGER,
        required:true,
       
    },
   
    })
    return Registered
    }

