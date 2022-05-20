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
        },
        repaymentMode:{
            type: DataTypes.ENUM("Direct Debit", "Cheques"),
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
            type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
            defaultValue:"Pending",
           
        },
        CorporativeId:{
            type: DataTypes.INTEGER
        }
        ,
        
    }) 
    return Loan;
}