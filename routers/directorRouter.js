const router = require("express").Router();
const directorController = require("../controllers/directorController")

const auth = require("../middleware/auth");
router.post("/:id",auth,directorController.addDirector);
router.get("/:id", auth,directorController.getDirector)
module.exports = router;