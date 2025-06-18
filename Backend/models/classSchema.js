import mongoose from "mongoose";


// Define the schema for Class
const classSchema = new mongoose.Schema(
  {
    grade: {
      type: String,
      required: [true, "Grade is required"], 
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Class model from the schema
export const Class = mongoose.model("Class", classSchema);
