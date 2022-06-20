const router = require("express").Router();
const procedure = require("../procedures/userProcedure")
const cooperativeMemberKYCController = require("../controllers/cooperativeMemberKYCController")

const auth = require("../middleware/auth");
router.post("/:id",auth,cooperativeMemberKYCController.addCooperativeMemberKYC);
router.get("/:id",auth,procedure.cooperativeMemberDetail)

module.exports = router;