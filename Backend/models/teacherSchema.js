import mongoose from "mongoose";
import validator from "validator";

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value), // Validate that the email is in a correct format
        message: 'Please provide a valid email address.',
      },
    },
    subject: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export const Teacher = mongoose.model('Teacher', teacherSchema);
