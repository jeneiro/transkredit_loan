module.exports =  (sequelize, DataTypes)=>{
    const InterestRate = sequelize.define("InterestRate", {
        date:{
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
       
         rate:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }, 
     
     
        
    }) 
    return InterestRate;}