import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import studentRouter from "./routes/studentRouter.js";
import teacherRouter from "./routes/teacherRouter.js";
import announcementRouter from "./routes/announcementRouter.js";
import attendanceRouter from "./routes/attendanceRouter.js";
import classRouter from "./routes/classRouter.js";
import eventsRouter from "./routes/eventsRouter.js";
import examRouter from "./routes/examRouter.js";
import assignmentRouter from "./routes/assignmentRouter.js";

import libraryRouter from "./routes/libraryRouter.js";
import usersRouter from "./routes/usersRouter.js";
import adminRegisterRouter from "./routes/adminRegisterRouter.js"; 

import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config(); // Load environment variables

const app = express();

const allowedOrigins = ["http://localhost:3000", "http://localhost:5184"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`❌ CORS Error: Origin '${origin}' is not allowed.`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions)); // Apply CORS
app.use(express.json()); // Parse JSON

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL; // Use .env or default

mongoose
  .connect("mongodb://127.0.0.1:27017/managment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Database connected successfully.");

    // Define routes after successful DB connection
    
    app.use("/api/library", libraryRouter);
    app.use("/api/teachers", teacherRouter);
    app.use("/api/announcements", announcementRouter);
    app.use("/api/attendance", attendanceRouter);
    app.use("/api/classes", classRouter);
    app.use("/api/events", eventsRouter);
    app.use("/api/exams", examRouter);
    app.use("/api/assignments", assignmentRouter);
    
    app.use("/api/users", usersRouter);
    app.use("/api/students", studentRouter);
    app.use("/api/register", adminRegisterRouter);


   
    


    // Apply error handling middleware at the end
    app.use(errorHandler);

    // Start the server
    app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1); // Exit process on failure
  });
