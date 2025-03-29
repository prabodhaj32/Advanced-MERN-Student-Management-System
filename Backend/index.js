import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());  // Make sure this middleware is used to parse JSON
app.use(cors());

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL ;

mongoose
  .connect("mongodb://127.0.0.1:27017/managment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Database connected successfully.");
    app.use("/api/admin", adminRoutes);  // Use the admin routes here
    app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
  })
  .catch((error) => console.error("❌ Error connecting to MongoDB:", error));
