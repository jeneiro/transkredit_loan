const { Document } = require("../models");

//add Passport
const addDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, document, corporateId, username } = req.body;
    // const document = req.file.buffer;
    const exist = await Document.findOne({ where: { name: name, AuthId: id } });
    if (exist) {
      const doc = await Document.update(
        { document: document.photo },
        { where: { name: name, AuthId: id } }
      );
      return res.status(200).json({ data: doc });
    }
    const doc = await Document.create({
      name: name,
      staffName:username,
      document: document.photo,
      AuthId: id,
      CorporateId:corporateId
    });
    return res.status(200).json({ data: doc });
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};

const deleteDocument = async (req, res) => {
  try {
    const { id, itemID } = req.params;

    // const document = req.file.buffer;

    const doc = await Document.destroy({ where: { AuthId: id, id: itemID } });
    return res.status(200).json({ msg: "deleted" });
  } catch (err) {
    console.log(err);

    return res.status(500).send(err);
  }
};

const getAllDocuments = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Document.findAll({ where: { AuthId: id } });
    res.status(200).json({ msg: "success", data: doc });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const validateDocument= async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Document.update({status:"Verified"},{ where: { id: id } });
    res.status(200).json({ msg: "success", data: doc });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const getAllDocumentsByCooprorate = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Document.findAll({ where: { CorporateId: id } });
    return res.status(200).json({ msg: "success", data: doc });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const downloadDocuments = async (req, res) => {
  try {
    const { id, itemID } = req.params;

    console.log(req.body);
    const doc = await Document.findOne({ where: { AuthId: id, id: itemID } });
    res.status(200).send({ data: doc });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const getSingleDocuments = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await Document.findAll({ where: { CorporateId: id } });
    res.status(200).json({ msg: "success", data: loan }).send(loan);
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
module.exports = {
  addDocument,
  getAllDocuments,
  downloadDocuments,
  getAllDocumentsByCooprorate,
  deleteDocument,
  validateDocument
};
