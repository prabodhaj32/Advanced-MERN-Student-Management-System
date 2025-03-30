import mongoose from "mongoose";

// Define the Admin schema
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create a model based on the schema
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
