import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    // Adding password complexity requirements (optional)
    validate: {
      validator: function (value) {
        // Password should contain at least one letter and one number
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value);
      },
      message: "Password must contain at least one letter and one number",
    },
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare input password with hashed password
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Define models, ensuring it doesn't overwrite if already compiled
const Admin = mongoose.models.Admin || mongoose.model("Admin", userSchema);
const Student = mongoose.models.Student || mongoose.model("Student", userSchema);
const Teacher = mongoose.models.Teacher || mongoose.model("Teacher", userSchema);

export { Admin, Student, Teacher };
