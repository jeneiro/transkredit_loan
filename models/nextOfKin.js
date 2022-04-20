module.exports =  (sequelize, DataTypes)=>{
    const NextOfKin = sequelize.define("NextOfKin", {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            },

        }, 
        phone:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        relationship:{
            type: DataTypes.STRING,
            required:true,
            allowNull:false
        },
        address:{
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

    return NextOfKin;
}