import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },
    registrationNumber: {
      type: String,
      required: [true, "Registration number is required"],
      unique: true,
      trim: true,
    },
    grade: {
      type: String,
      required: [true, "Grade is required"],
      enum: ["A", "B", "C", "D", "E", "F"], // Adjust according to grading system
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email format",
      },
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export const Student = mongoose.model("Student", studentSchema);
