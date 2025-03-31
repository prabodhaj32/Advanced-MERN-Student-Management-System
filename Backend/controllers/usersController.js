import { handleValidationError } from "../middlewares/errorHandler.js";
import { Admin } from "../models/adminRegisterSchema.js";
import { Student, Teacher } from "../models/usersSchema.js";
import bcrypt from "bcryptjs"; // Ensure bcrypt is installed for password hashing
import jwt from "jsonwebtoken";

// Admin Registration
export const adminRegister = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Admin already registered" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({ email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ success: true, message: "Admin registered successfully" });
  } catch (err) {
    next(err);
  }
};

// Admin Sign In
export const adminSignIn = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Check if admin exists in the database
      const admin = await Admin.findOne({ email });
      if (!admin) {
          return res.status(401).json({ error: "Admin not found" });
      }

      // Compare password with hashed password in DB
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
          return res.status(401).json({ error: "Invalid password" });
      }

      // Generate JWT token
      const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.status(200).json({ message: "Sign-in successful", token });
  } catch (error) {
      console.error("Error in admin sign-in:", error);
      res.status(500).json({ error: "Internal server error" });
  }
};

// Student Sign In
export const studentSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    const existingStudent = await Student.findOne({ email });
    if (!existingStudent) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, existingStudent.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({ success: true, message: "Student signed in successfully" });
  } catch (err) {
    next(err);
  }
};


// Teacher Sign In
export const teacherSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    const existingTeacher = await Teacher.findOne({ email });
    if (!existingTeacher) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, existingTeacher.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({ success: true, message: "Teacher signed in successfully" });
  } catch (err) {
    next(err);
  }
};
