const router = require("express").Router();
const directorController = require("../controllers/directorController")

const auth = require("../middleware/auth");
router.post("/",auth,directorController.addDirector);

module.exports = router;