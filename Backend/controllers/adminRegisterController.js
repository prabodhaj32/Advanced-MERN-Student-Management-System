// controllers/adminController.js
import bcrypt from "bcrypt";
import { Admin } from "../models/Admin.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const adminRegister = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Validate the input
    if (!name || !email || !password) {
      return handleValidationError("Please fill out all fields", 400, res);
    }

    // Check if the admin already exists in the database
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin with hashed password
    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    // Return success response with created admin details
    res.status(200).json({
      success: true,
      message: "Admin Created!",
      admin: {
        name: newAdmin.name,
        email: newAdmin.email,
      },
    });
  } catch (err) {
    next(err);
  }
};
