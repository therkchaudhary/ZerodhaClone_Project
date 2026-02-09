const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  // 1. Browser ki cookies se token nikalo
  const token = req.cookies.token;
  console.log("Verifying token. Cookies:", req.cookies); // Added log

  // 2. Agar token nahi hai, to 'false' return kro
  if (!token) {
    return res.json({ status: false });
  }

  // 3. Agar token hai, to verify kro
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      // Token expired ya galat hai
      return res.json({ status: false });
    } else {
      // Token sahi hai, user ko dhoondo
      const user = await User.findById(data.id);
      if (user)
        return res.json({ status: true, user: user.username });
      else
        return res.json({ status: false });
    }
  });
};