const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  // 1. Check token in Cookies or Authorization Header
  let token = req.cookies.token;

  // Fallback: Check Authorization header (Bearer <token>)
  if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  // console.log("Verifying token. Source:", token ? "Found" : "Missing"); 

  // 2. If no token, return false
  if (!token) {
    console.log("AuthMiddleware: No token found in cookies or header");
    return res.json({ status: false });
  }

  // 3. Verify token
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.error("AuthMiddleware: Token verification failed:", err.message);
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        // console.log("AuthMiddleware: User verified:", user.username);
        return res.json({ status: true, user: user.username });
      } else {
        console.log("AuthMiddleware: User not found for ID:", data.id);
        return res.json({ status: false });
      }
    }
  });
};