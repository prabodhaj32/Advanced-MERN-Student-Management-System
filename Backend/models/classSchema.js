import mongoose from "mongoose";
import validator from "validator";

// Define the schema for Class
const classSchema = new mongoose.Schema(
  {
    grade: {
      type: String,
      required: [true, "Grade is required"], // Ensures that grade must be provided
      trim: true, // Trims any extra spaces around the grade
      // Optional: You can add a validator to check if the grade follows a specific format
      // Example: Only allows 'A', 'B', 'C', etc.
      // validate: {
      //   validator: (value) => ["A", "B", "C"].includes(value), // Example of allowed grades
      //   message: (props) => `${props.value} is not a valid grade!`, // Custom error message
      // },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Class model from the schema
export const Class = mongoose.model("Class", classSchema);
