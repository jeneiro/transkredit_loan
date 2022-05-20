module.exports =  (sequelize, DataTypes)=>{
    const Staff = sequelize.define("Staff", {
        
        fullName:{
            type: DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        staffId:{
            type: DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        CorporateId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull: false,  
              
        },
        Status:{
            type: DataTypes.ENUM("No Request", "Approved"),
            defaultValue:"No Request",
           
        },
        AuthId:{
            type: DataTypes.INTEGER,
          
           
        },
       
       
     

    }) 
    return Staff;
}