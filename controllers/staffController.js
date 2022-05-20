const { Staff } = require("../models");
//add Next Of Kin
const addStaffList = async (req, res) => {
  try {
    let list = req.body;

    const staff = list.forEach(async (element) => {
      const { fullname, staffid } = element;
      const { id } = req.params;

      if (!staffid || !fullname) {
        return "Invalid Format";
      }
      const existing = await Staff.findOne({ where: { staffid: staffid, CorporateId:id } });
      if (existing) {
        return res.json("User with" + staffid + "already exist");
      }
      const staff = await Staff.create({
        fullName: fullname,
        CorporateId: id,
        staffId: staffid,
        Status: "No Request",
      });
      return staff;
    });

    res.status(200).json({ msg: "Staff List Added" });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};

const addStaff = async  (req, res) => {
    try {
        const { fullname, staffId } = req.body;
        const { id } = req.params;
        const exist = await Staff.findOne({where:{CorporateId:id, staffId:staffId}});
        if (exist){
            const update = await Staff.update(   { Status: "Pending" },
            { where: { staffId: staffId } })
            return res.json({msg:"successfull", addstaff:addstaff})
        }
        const addstaff = await Staff.create({
            fullName: fullname,
            CorporateId: id,
            staffId: staffId,
            Status: "Pending",
          });
          return res.json({msg:"request made successfull", addstaff:addstaff})
    } catch (err) {
        console.log(err);
    
        res.status(500).send(err);
      }
}
const getStaffList = async (req, res) => {
  try {
    const {id} = req.params;
    const list = await Staff.findAll({
      where: { CorporateId: id, },
    });
    return res.status(200).json({ msg: "successfull", List: list });
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
};
const getPendingList = async (req, res) => {
    try {
      const {id} = req.params;
      const list = await Staff.findAll({
        where: { CorporateId: id, Status: "Pending" },
      });
      return res.status(200).json({ msg: "successfull", List: list });
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }
  };
  const getApprovedList = async (req, res) => {
    try {
      const {id} = req.params;
      const list = await Staff.findAll({
        where: { CorporateId: id, Status: "Approved" },
      });
      return res.status(200).json({ msg: "successfull", List: list });
    } catch (err) {
      console.log(err);
  
      res.status(500).send(err);
    }
  };

  const deleteStaff = async(req, res)=>{
      try {
        const {id} = req.params;

        const {staffId} =req.body;
        console.log(req.body)
        const removeStaff = await Staff.destroy({where:{CorporateId:id, staffId:staffId}})
        return res.json({msg:"record deleted"})
          
      } catch (err) {

         console.log(err);
  
      res.status(500).send(err);  
      }
  }
  const getStaffbyAuthId = async(req, res)=>{
    try {
      const {id} = req.params;
      const staff = await Staff.findOne({where:{AuthId:id}})
      return res.json({msg:"successfull", data:staff})
        
    } catch (err) {

       console.log(err);

    res.status(500).send(err);  
    }
}

module.exports = { addStaffList, getStaffList, getPendingList, getApprovedList, deleteStaff, addStaff, getStaffbyAuthId};
