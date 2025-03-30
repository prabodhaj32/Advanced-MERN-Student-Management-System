import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    index: true, // Add index for faster querying by registrationNumber
  },
  className: {
    type: String,
    required: true,
    index: true, // Add index for faster querying by className
  },
  marks: {
    type: Number,
    required: true,
    min: 0, // Ensure marks cannot be negative
    max: 100, // Ensure marks cannot exceed 100
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

export const Exam = mongoose.model('Exam', examSchema);
