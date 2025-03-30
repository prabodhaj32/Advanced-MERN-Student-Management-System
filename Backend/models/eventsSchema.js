import mongoose from "mongoose";

// Define the schema for events
const eventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Event name is required
  },
  date: {
    type: Date,
    required: true,  // Event date is required
  },
  location: {
    type: String,
    required: true,  // Event location is required
  },
  description: {
    type: String,
    required: true,  // Event description is required
  },
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

// Create a model for the Events schema
export const Events = mongoose.model('Events', eventsSchema);
