module.exports =  (sequelize, DataTypes)=>{
    const Corporate = sequelize.define("Corporate", {
        category:{
            type: DataTypes.ENUM("llc","plc","partnership", "sole proprietorship", "schools", "other"),
            allowNull: false,
            required:true,
        },
        companyName:{
            type: DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        registrationName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true 
            }
        }, 
        doi:{
            type: DataTypes.DATE,
            allowNull: false,
           
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        countryOfRegistration:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        typeOfBusiness:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        sector:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
       
        OperatingAddress:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        CorporateAddress:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        email:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false, 
        },
        phoneNumber:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false, 
        },
        scumlRegNo:{
            type:DataTypes.DATE,
            required:true,
            allowNull: false, 

        },
  
        tin:{
            type:DataTypes.STRING, 
            required:true,
            allowNull: false,
        },
        isCorporative:{type:DataTypes.ENUM("true","false"),
        required:true,
        allowNull: false,
    }
        
     

    }) 
    return Corporate;
}