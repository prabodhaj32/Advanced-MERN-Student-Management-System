import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Student = mongoose.models.Student || mongoose.model("Student", userSchema);
const Teacher = mongoose.models.Teacher || mongoose.model("Teacher", userSchema);

export { Student, Teacher };
