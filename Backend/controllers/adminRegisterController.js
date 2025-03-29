import { Admin } from "../models/adminRegisterSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const adminRegister = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    // Validate the input
    if (!email || !password) {
      return handleValidationError("Please fill out the form!", 400, res);  // Returning the error response
    }

    // Check if the admin already exists in the database
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    // Create a new admin
    await Admin.create({ email, password });

    // Return success response
    res.status(200).json({
      success: true,
      message: "Admin Created!",
    });
  } catch (err) {
    next(err);  // Pass any unexpected error to the error handler
  }
};
