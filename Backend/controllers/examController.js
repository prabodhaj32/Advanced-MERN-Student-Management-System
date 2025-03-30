import { Exam } from "../models/examSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const addExam = async (req, res, next) => {
  const { name, registrationNumber, className, marks } = req.body;
  try {
    // Check if any required field is missing
    if (!name || !registrationNumber || !className || !marks) {
      return handleValidationError("Please fill out all fields!", 400); // Properly handle validation error
    }

    // Create a new exam
    const newExam = await Exam.create({ name, registrationNumber, className, marks });

    // Send success response
    res.status(200).json({
      success: true,
      message: "A new exam has been added!",
      exam: newExam, // Include the created exam in the response for confirmation
    });
  } catch (err) {
    next(err); // Forward any errors to the error handler middleware
  }
};

export const getAllExams = async (req, res, next) => {
  try {
    // Fetch all exams from the database
    const exams = await Exam.find();

    // Send success response with all exams
    res.status(200).json({
      success: true,
      exams, // Return the list of exams
    });
  } catch (err) {
    next(err); // Forward any errors to the error handler middleware
  }
};
