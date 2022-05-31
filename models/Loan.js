module.exports =  (sequelize, DataTypes)=>{
    const Loan = sequelize.define("Loan", {
        date:{
            type: DataTypes.DATE,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        loanType:{
            type: DataTypes.ENUM("Consumer Loan", "Corporate Loan"),
            required:true,
            allowNull: false,  
        },
        repaymentMode:{
            type: DataTypes.ENUM("Direct Debit", "Cheques"),
            required:true,
            allowNull: false,  
        },
        existingLoan:{
            type: DataTypes.BOOLEAN,

        }
        ,
        loanAmount:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }, 
        tenor:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty: true
            },
           
        },
        status:{
            type: DataTypes.ENUM("Pending","Submitted","Approved","Rejected"),
            defaultValue:"Pending",
           
        },
        repaymentStatus:{
            type: DataTypes.ENUM("Not Applicable", "Ongoing", "Completed"),
            defaultValue:"Not Applicable",
           
        },
        CorporativeId:{
            type: DataTypes.INTEGER
        }
        ,
        AuthId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
      
        
    }) 
    return Loan;
}