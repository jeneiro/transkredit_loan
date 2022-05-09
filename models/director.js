module.exports =  (sequelize, DataTypes)=>{
    const Director = sequelize.define("Director", {
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        bvn:{
            type: DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true 
            }
        }, 
        dob:{
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
        phone:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        motherMaidenName:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        maritalStatus:{
            type: DataTypes.ENUM("married", "single", "divorced", "seperated", "widowed"),
            required:true,
            allowNull: false,  
        },
        
        gender:{
            type: DataTypes.ENUM("male", "female"),
            required:true,
            allowNull: false,  
        },
        stateOfOrigin:{
            type:DataTypes.STRING,
             
        },
        nationality:{
            type:DataTypes.STRING,
            required:true,
            allowNull: false,  
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
        tin:{
            type:DataTypes.STRING, 
        },
        occupation:{
            type:DataTypes.STRING, 
            required:true,
            allowNull: false, 
        },
        placeOfWork:{
            type:DataTypes.STRING, 
            required:true,
            allowNull: false, 
        },
        natureOfBusiness:{
            type:DataTypes.STRING, 
            required:true,
            allowNull: false, 
        },
        
        address:{
            type:DataTypes.STRING, 
            required:true,
            allowNull: false, 
        },
        workAddress:{
            type:DataTypes.STRING, 
            required:true,
            allowNull: false, 
        },
        CorporateId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull: false,  
        }

    }) 
    return Director;
}