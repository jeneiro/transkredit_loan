module.exports =  (sequelize, DataTypes)=>{
    const joinRequest = sequelize.define("joinRequest", {
        
        IndividualId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull: false,  
        },
        CorporativeId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull: false,  
        },
       
       
     

    }) 
    return joinRequest;
}