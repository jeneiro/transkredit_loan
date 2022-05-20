const router = require("express").Router();
const joinRequestController = require("../controllers/joinRequestController");
const auth = require("../middleware/auth");

router.post("/:id", auth, joinRequestController.addJoinRequest);
router.post("/approve/:corporateId", auth, joinRequestController.approveJoinRequest);
router.post("/reject/:corporateId", auth, joinRequestController.rejectJoinRequest);
router.delete("/:id", auth, joinRequestController.deleteJoinRequest);
router.get("/:id", auth, joinRequestController.getJoinRequestIndividual);
router.get("/approved/:IndividualId", auth, joinRequestController.getJoinRequestIndividualApproved);
router.get("/corporate/:id", auth, joinRequestController.getJoinRequestCorporate);


module.exports = router;