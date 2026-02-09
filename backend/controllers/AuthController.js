const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs"); // Ensure bcryptjs is used as per package.json

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    // Determine domain for cookie if needed, but for localhost it's tricky with ports.
    // Ideally we don't set domain for localhost to allow sharing if on same domain.
    // Browsers treat ports on localhost as same site often for cookies if domain is not set (host-only).

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false, // User requested to read it potentially, leaving false.
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
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User logged in successfully", success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports.Logout = (req, res) => {
  res.clearCookie("token", {
    withCredentials: true,
    httpOnly: false,
  });
  res.status(201).json({ message: "User logged out successfully", success: true });
};