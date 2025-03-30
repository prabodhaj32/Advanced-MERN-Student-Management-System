import mongoose from "mongoose";
import validator from "validator";

// Announcement schema
const announcementSchema = new mongoose.Schema({
  announcement: {
    type: String,
    required: [true, "Announcement text is required"], // Ensure it's required
    validate: {
      validator: function (v) {
        // You can add additional validation logic here if necessary
        return validator.isLength(v, { min: 5 }); // Example: Announcement must be at least 5 characters long
      },
      message: "Announcement must be at least 5 characters long", // Error message
    },
  },
});

export const Announcement = mongoose.model("Announcement", announcementSchema);
