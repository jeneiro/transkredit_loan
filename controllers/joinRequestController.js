const { JoinRequest, Staff } = require("../models");

//add Passport
const addJoinRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, CorporateId, IndividualName, StaffId } = req.body;
    const exist = await Staff.findOne({
      where: { StaffId: StaffId, CorporateId: CorporateId },
    });
    if (!exist) {
      return res.status(500).json({
        msg: "User has not been profiled by Corporative, Please contact your Corporative",
      });
    }
    const reTrial = await JoinRequest.findOne({
      where: { AuthId: id, CorporateId: CorporateId, Status: "Rejected" },
    });
    if (reTrial) {
      const join = await JoinRequest.update(
        {
          Status: "Pending",
        },
        { where: { AuthId: id, CorporateId: CorporateId } }
      );

      return res.status(200).json({ msg: "updated", data: join });
    }
    const join = await JoinRequest.create({
      StaffId: StaffId,
      AuthId: id,
      CorporateId: CorporateId,
      CorporativeName: name,
      IndividualName: IndividualName,
    });
    return res.status(200).json({ msg: "success", data: join });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
  return;
};

const getJoinRequestIndividual = async (req, res) => {
  try {
    const { id } = req.params;

    const join = await JoinRequest.findAll({
      where: { AuthId: id },
      Status: "Pending",
    });

    return res.status(200).json({ msg: "success", data: join });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
  return;
};
const getJoinRequestIndividualApproved = async (req, res) => {
  try {
    const { IndividualId } = req.params;

    const join = await JoinRequest.findAll({
      where: { IndividualId: IndividualId },
    });
    return res.status(200).json({ msg: "success", data: join });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
  return;
};
const getJoinRequestCorporate = async (req, res) => {
  try {
    const { id } = req.params;

    const join = await JoinRequest.findAll({
      where: { CorporateId: id, Status: "Pending" },
    });
    return res.status(200).json({ msg: "success", data: join });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
  return;
};
//get Registered
const approveJoinRequest = async (req, res) => {
  try {
    const { corporateId } = req.params; //CorporativeId
    const { id, staffId, fullName, AuthId } = req.body;
    console.log(AuthId);

    const updateRequest = await JoinRequest.update(
      { Status: "Approved" },
      { where: { id: id, StaffId: staffId, corporateId: corporateId } }
    );
    const create = await Staff.create({
      fullName: fullName,
      CorporateId: corporateId,
      staffId: staffId,
      Status: "Approved",
      AuthId: AuthId,
    });
    return res.status(200).json({ msg: "Request Approved", staff: create });
  } catch (error) {
    return res.status(500).send(error);
  }
};
const rejectJoinRequest = async (req, res) => {
  try {
    const { corporateId } = req.params; //CorporativeId
    const { id, staffId } = req.body;
    console.log(req.body);
    const updateRequest = await JoinRequest.update(
      { Status: "Rejected" },
      { where: { id: id, StaffId: staffId, corporateId: corporateId } }
    );
    return res.status(200).json({ msg: "Request Rejected" });
  } catch (error) {
    return res.status(500).send(error);
  }
};
const deleteJoinRequest = async (req, res) => {
  try {
    const { id } = req.params; //individualID

    const join = await JoinRequest.destroy({ where: { IndividualId: id } });

    return res.status(200).json({ msg: "Request Deleted" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  addJoinRequest,
  approveJoinRequest,
  deleteJoinRequest,
  rejectJoinRequest,
  getJoinRequestIndividual,
  getJoinRequestCorporate,
  getJoinRequestIndividualApproved,
};
