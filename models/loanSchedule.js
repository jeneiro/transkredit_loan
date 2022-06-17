module.exports =  (sequelize, DataTypes)=>{
    const LoanSchedule = sequelize.define("LoanSchedule", {
        date:{
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
       
         monthlyAmount:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }, 
        month:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }, 
        
    
        status:{
            type: DataTypes.ENUM("Pending","Paid"),
            defaultValue:"Pending",
           
        },
        
       
        LoanId:{
            type: DataTypes.INTEGER
        }
        
      
      
        
    }) 
    return LoanSchedule;}