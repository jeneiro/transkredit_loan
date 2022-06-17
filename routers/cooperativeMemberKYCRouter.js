const router = require("express").Router();
const cooperativeMemberKYCController = require("../controllers/cooperativeMemberKYCController")

const auth = require("../middleware/auth");
router.post("/:id",auth,cooperativeMemberKYCController.addCooperativeMemberKYC);
router.get("/:id",auth,cooperativeMemberKYCController.getCooperativeMemberKYC)

module.exports = router;