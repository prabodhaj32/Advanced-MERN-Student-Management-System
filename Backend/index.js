import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import adminRegisterRouter from "./router/adminRegisterRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", adminRegisterRouter);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
