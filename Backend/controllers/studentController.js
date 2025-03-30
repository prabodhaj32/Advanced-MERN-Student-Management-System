import { Student } from "../models/studentSchema.js";

export const createStudent = async (req, res, next) => {
  console.log(req.body);
  const { name, registrationNumber, grade, email } = req.body;

  try {
    // Validate required fields
    if (!name || !registrationNumber || !grade || !email) {
      return res.status(400).json({ success: false, message: "Please fill in all required fields." });
    }

    // Trim inputs to avoid unnecessary spaces
    const trimmedName = name.trim();
    const trimmedRegNum = registrationNumber.trim();
    const trimmedEmail = email.trim();

    // Check if registration number already exists
    const existingStudent = await Student.findOne({ registrationNumber: trimmedRegNum });
    if (existingStudent) {
      return res.status(400).json({ success: false, message: "Registration number already exists!" });
    }

    // Create new student
    const student = await Student.create({ 
      name: trimmedName, 
      registrationNumber: trimmedRegNum, 
      grade, 
      email: trimmedEmail 
    });

    res.status(201).json({
      success: true,
      message: "Student Created Successfully!",
      student,
    });

  } catch (err) {
    console.error("Error creating student:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
