const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    // FIXED: Added maxAge so cookie survives a refresh
    res.cookie("token", token, {
      path: "/",
      httpOnly: false, 
      secure: true,    // HTTPS required for 'none'
      sameSite: "none", 
      maxAge: 24 * 60 * 60 * 1000, // 24 hours (milliseconds)
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);

    // FIXED: Added maxAge to prevent logout on page refresh
    res.cookie("token", token, {
      path: "/",
      httpOnly: false,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.status(201).json({ message: "User logged in successfully", success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.Logout = (req, res) => {
  // FIXED: Path must match the setting path to be deleted
  res.clearCookie("token", {
    path: "/",
    withCredentials: true,
    httpOnly: false,
    secure: true,
    sameSite: "none",
  });
  res.status(201).json({ message: "User logged out successfully", success: true });
};