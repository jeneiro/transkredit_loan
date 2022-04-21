const router = require("express").Router();
const directorController = require("../controllers/directorController")

router.post("/",directorController.addDirector);

module.exports = router;