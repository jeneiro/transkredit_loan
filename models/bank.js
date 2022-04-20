module.exports =  (sequelize, DataTypes)=>{
    const Bank = sequelize.define("Bank", {
        bankName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            },

        }, 
        accountName:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        accountNumber:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        IndividualId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull:false
        }
      
    })

    return Bank;
}