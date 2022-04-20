const router = require("express").Router();
const userController = require("../controllers/userController")

router.post("/",userController.addUser);
router.get("/",userController.findAllUser);
router.get("/:id",userController.findOneUser);
module.exports = router;
