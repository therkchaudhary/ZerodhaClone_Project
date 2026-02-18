const { Signup, Login, Logout } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware"); // <-- Ye import karein
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

// Ye naya route add karein verification ke liye
// Ye naya route add karein verification ke liye
router.post("/verify", userVerification);

module.exports = router;