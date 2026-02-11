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

    // Render/Production Cookie Settings
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false, 
      secure: true,    // Production mein HTTPS zaroori hai
      sameSite: "none", // Cross-site access allow karta hai
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const token = createSecretToken(user._id);

    // Render/Production Cookie Settings
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      secure: true,    // Production mein HTTPS zaroori hai
      sameSite: "none", // Cross-site access allow karta hai
    });

    res.status(201).json({ message: "User logged in successfully", success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports.Logout = (req, res) => {
  // Clear Cookie with same options used during setting
  res.clearCookie("token", {
    withCredentials: true,
    httpOnly: false,
    secure: true,
    sameSite: "none",
  });
  res.status(201).json({ message: "User logged out successfully", success: true });
};