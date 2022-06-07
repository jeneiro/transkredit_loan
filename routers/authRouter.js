const router = require("express").Router();
const authController = require("../controllers/authController")
const auth = require("../middleware/auth");
router.post("/login",authController.login);
router.post("/register",authController.register);
router.post("/delete/:id",authController.deleteAccount);
router.get("/", auth,authController.getAllUsers )

module.exports = router;