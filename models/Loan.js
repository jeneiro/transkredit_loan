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
            type: DataTypes.ENUM("true","false")
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
            }
        }
    }) 
    return Loan;
}