import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminRegisterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

// Pre-save hook to hash password before saving to database
adminRegisterSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password
adminRegisterSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

export const Admin = mongoose.model('Admin', adminRegisterSchema);
