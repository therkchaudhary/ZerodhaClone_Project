const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware"); // <-- Ye import karein
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);

// Ye naya route add karein verification ke liye
router.post("/", userVerification); 

module.exports = router;