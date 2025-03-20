import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import route from "./routes/userRoute.js";

// Create an Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Set the port from environment variables or default to 7000
const PORT = process.env.PORT || 7000;

// Get the MongoDB connection URL from environment variables
const MONGOURL = process.env.MONGO_URL;

// Connect to MongoDB and start the server
mongoose.connect("mongodb://127.0.0.1:27017/mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Database connected successfully.");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
 //app.use("/api", route);
