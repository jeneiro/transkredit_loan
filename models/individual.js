module.exports =  (sequelize, DataTypes)=>{
    const Individual = sequelize.define("Individual", {
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
           required:true
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
        
        address:{
            type:DataTypes.STRING, 
        },
        onlineAccess:{
            type: DataTypes.BOOLEAN,
           
        },
        AuthId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull: false,  
        },
       CorporativeId:{
        type: DataTypes.INTEGER,
       }
       
    }) 
    return Individual;
}