module.exports =  (sequelize, DataTypes)=>{
    const WorkDetail = sequelize.define("WorkDetail", {
        
        sourceOfIncome:{
            type: DataTypes.ENUM("Salary", "Business", "Inheritance"),
        },
       
        
        salaryRange:{
            type: DataTypes.STRING,
            allowNull:false,

        },
        placeOfWork:{
            type: DataTypes.STRING,
            allowNull:false,

        }
        ,
        natureOfBusiness:{
            type: DataTypes.STRING,
            allowNull:false,
        }, 
        workAddress:{
            type: DataTypes.STRING,
            allowNull:false,
        }, 
        IndividualId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull:false
        }
       
    }) 
    return WorkDetail;
}