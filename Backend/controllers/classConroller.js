import { Class } from "../models/classSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createClass = async (req, res, next) => {
  console.log(req.body);
  const { grade } = req.body;

  try {
    // Validate input
    if (!grade) {
      return handleValidationError("Please Fill Form!", 400, next); // Passing 'next' for error handling
    }

    // Create new class entry
    const newClass = await Class.create({ grade });

    // Return response
    res.status(200).json({
      success: true,
      message: "Class Created!",
      class: newClass, // Optionally, return the created class
    });
  } catch (err) {
    next(err); // Forward error to error handler middleware
  }
};

export const getAllClasses = async (req, res, next) => {
  try {
    // Fetch all classes from the database
    const classes = await Class.find();

    // Return response with classes
    res.status(200).json({
      success: true,
      classes,
    });
  } catch (err) {
    next(err); // Forward error to error handler middleware
  }
};
