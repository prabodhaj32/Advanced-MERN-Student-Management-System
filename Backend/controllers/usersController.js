// controllers/usersController.js
import Admin from "../models/Admin.js"; // Ensure you have the Admin model imported
import bcrypt from "bcrypt"; // If using bcrypt for password hashing

export const adminSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Admin not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    // You can generate a token here using JWT (e.g., `jsonwebtoken` package)
    res.status(200).json({ message: "Sign-in successful", admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error signing in", error });
  }
};
