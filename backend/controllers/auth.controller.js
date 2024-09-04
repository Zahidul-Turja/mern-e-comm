import User from "../models/user.model.js";

const generateTokens = (userId) => {};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    // Authenticate User
    const { accessToken, refreshToken } = generateTokens(user._id);

    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  res.send("Login up port");
};

export const logout = async (req, res) => {
  res.send("Logout up port");
};
