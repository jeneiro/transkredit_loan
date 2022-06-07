const router = require("express").Router();
const staffController = require("../controllers/staffController")

router.post("/:id",staffController.addStaffList);
router.post("/addstaff/:id",staffController.addStaff);
router.get("/:id",staffController.getStaffList);
router.get("/pending/:id",staffController.getPendingList);
router.get("/approved/:id",staffController.getApprovedList);
router.post("/delete/:id", staffController.deleteStaff);
router.get("/byAuth/:id",staffController.getStaffbyAuthId)
router.get("/byStaffId/:CorporateId/:id",staffController.getStaffbyStaffId)
module.exports = router;
