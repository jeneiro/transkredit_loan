module.exports =  (sequelize, DataTypes)=>{
    const Corporative = sequelize.define("Corporative", {
        
        name:{
            type: DataTypes.STRING,
            required:true,
            allowNull: false,  
        },
        CorporateId:{
            type: DataTypes.INTEGER,
              
        },
       
       
     

    }) 
    return Corporative;
}