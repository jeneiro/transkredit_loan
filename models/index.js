'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
// const {Loan, ExisitingLoan} = require('../models')

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
//db.Sequelize = Sequelize;

//Associations
db.Auth.hasOne(db.Individual)
db.Individual.belongsTo(db.Auth)

db.Auth.hasOne(db.Corporate)
db.Corporate.belongsTo(db.Auth)

db.Auth.hasOne(db.Registered)
db.Registered.belongsTo(db.Auth)

db.Loan.hasMany(db.ExistingLoan)
db.ExistingLoan.belongsTo(db.Loan)

db.Individual.hasMany(db.Loan)
db.Loan.belongsTo(db.Individual)

db.Corporate.hasMany(db.Director)
db.Director.belongsTo(db.Corporate)

db.Corporate.hasMany(db.Individual)
db.Individual.belongsTo(db.Corporate)

db.Individual.hasOne(db.NextOfKin)
db.NextOfKin.belongsTo(db.Individual)

db.Individual.hasOne(db.WorkDetail)
db.WorkDetail.belongsTo(db.Individual)

db.Individual.hasOne(db.JointIndividual)
db.JointIndividual.belongsTo(db.Individual)

db.Individual.hasOne(db.Bank)
db.Bank.belongsTo(db.Individual)

db.Individual.hasOne(db.Passport)
db.Passport.belongsTo(db.Individual)

db.JointIndividual.hasOne(db.JointNextOfKin)
db.JointNextOfKin.belongsTo(db.JointIndividual)





sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



module.exports = db;
