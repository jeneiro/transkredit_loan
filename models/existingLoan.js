module.exports =  (sequelize, DataTypes)=>{
    const ExistingLoan = sequelize.define("ExistingLoan", {
        lender:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
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
        },
        date:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        outstandingAmount:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty: true
            }

        },
        LoanId:{
            type: DataTypes.INTEGER,
            required:true,
            allowNull: false,  
        }
    }) 
    return ExistingLoan;
}