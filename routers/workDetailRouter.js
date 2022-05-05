const router = require("express").Router();
const WorkDetail = require("../controllers/workDetailController")
const auth = require("../middleware/auth");

router.post("/:id",auth, WorkDetail.addWorkDetail);

module.exports = router;