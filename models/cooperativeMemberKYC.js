module.exports =  (sequelize, DataTypes)=>{
    const CooperativeMemberKYC = sequelize.define("CooperativeMemberKYC", {
        bvn:{
            type: DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        phone:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        address:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        meansOfID:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false, 
        },
        IDnumber:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false, 
        },
        issuanceDate:{
            type:DataTypes.DATE,
            required:true,
            allowNull: false, 

        },
        expiryDate:{
            type:DataTypes.DATE,
            required:true,
            allowNull: false, 
            
        },
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
      
       AuthId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull:false
           
        }
      
    })

    return CooperativeMemberKYC;
}