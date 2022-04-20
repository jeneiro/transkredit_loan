module.exports =  (sequelize, DataTypes)=>{
    const Auth = sequelize.define("Auth", {
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        passwordharsh:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }, 
        isAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }
    }) 
    return Auth;
}