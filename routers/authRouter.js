const router = require("express").Router();
const authController = require("../controllers/authController")

router.post("/login",authController.login);
router.post("/register",authController.register);
router.post("/delete/:id",authController.deleteAccount);

module.exports = router;