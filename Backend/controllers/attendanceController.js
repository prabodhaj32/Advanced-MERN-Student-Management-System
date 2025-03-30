import Attendance from "../models/attendanceSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

// Mark Attendance - POST
export const markAttendance = async (req, res, next) => {
  const { attendanceData } = req.body;

  try {
    // Validate input
    if (!attendanceData || !Array.isArray(attendanceData) || attendanceData.length === 0) {
      return handleValidationError("Attendance data is missing or invalid!", 400, next); // Return the error through next middleware
    }

    // Create attendance records
    const attendanceRecords = await Promise.all(attendanceData.map(async (record) => {
      const { student, status } = record;

      // Create attendance record
      return await Attendance.create({ student, status });
    }));

    // Respond with success
    res.status(200).json({
      success: true,
      message: "Attendance marked successfully!",
      attendanceRecords
    });
  } catch (err) {
    next(err);  // Pass any errors to error handler
  }
};

// Get All Attendance - GET
export const getAllAttendance = async (req, res, next) => {
  try {
    // Find all attendance records and populate student details
    const attendanceRecords = await Attendance.find()
      .populate('student', 'name registrationNumber grade'); // Populate the student data

    // Respond with success
    res.status(200).json({
      success: true,
      attendanceRecords
    });
  } catch (err) {
    next(err); // Pass errors to the next middleware
  }
};
