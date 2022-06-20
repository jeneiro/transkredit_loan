const db = require("../models");


const user = async (req, res) => {

  const procedureQuery = "call auth_email()";
  try {
    await db.sequelize.query(procedureQuery).then((data) => {
      return res.status(200).json({ msg: "success", data: data });
    });
  } catch (err) {
    return res.status(500).send();
  }
};

const allIndividualAccounts = async (req, res) => {

  const procedureQuery = "call all_individual_accounts()";
  try {
    await db.sequelize.query(procedureQuery).then((data) => {
      return res.status(200).json({ msg: "success", data: data});
    });
  } catch (err) {
    return res.status(500).send();
  }
};
const allCorporateAccounts = async (req, res) => {

  const procedureQuery = "call all_corporate_accounts()";
  try {
    await db.sequelize.query(procedureQuery).then((data) => {
      return res.status(200).json({ msg: "success", data: data});
    });
  } catch (err) {
    return res.status(500).send();
  }
};
const allCooporativeMemberAccounts = async (req, res) => {

  const procedureQuery = "call all_cooporative_member_accounts()";
  try {
    await db.sequelize.query(procedureQuery).then((data) => {
      return res.status(200).json({ msg: "success", data: data});
    });
  } catch (err) {
    return res.status(500).send();
  }
};
const individualDetail = async (req, res) => {
  const { id } = req.params;
  const procedureQuery = 'CALL individual_detail(:IndividualId)';
  try {
    await db.sequelize.query(procedureQuery, 
    {replacements: { IndividualId: id }}).then((data) => {
     
      return res.status(200).json({ msg: "success", data: data[0] });
    });
  } catch (err) {
    return res.status(500).send();
  }
};

const cooperativeMemberDetail = async (req, res) => {
  const { id } = req.params;
  const procedureQuery = 'CALL cooperative_member_detail(:AuthId)';
  try {
    await db.sequelize.query(procedureQuery, 
    {replacements: { AuthId: id }}).then((data) => {
     
      return res.status(200).json({ msg: "success", data: data[0] });
    });
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = { user , individualDetail, allIndividualAccounts, allCorporateAccounts, allCooporativeMemberAccounts, cooperativeMemberDetail};
