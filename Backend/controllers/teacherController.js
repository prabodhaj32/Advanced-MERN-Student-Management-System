import { Teacher } from "../models/teacherSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

// Create a new teacher
export const createTeacher = async (req, res, next) => {
  console.log(req.body);
  const { name, email, subject } = req.body;
  try {
    // Validate input fields
    if (!name || !email || !subject) {
      return handleValidationError("Please Fill Full Form!", 400, res); // Ensure return is used
    }
    
    // Create teacher if validation passes
    await Teacher.create({ name, email, subject });

    res.status(200).json({
      success: true,
      message: "Teacher Created!",
    });
  } catch (err) {
    next(err); // Pass any errors to the error handling middleware
  }
};

// Get all teachers
export const getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });
  } catch (err) {
    next(err); // Pass any errors to the error handling middleware
  }
};
