import express from "express";
import { createTeacher, getAllTeachers } from "../controllers/teacherController.js";

const router = express.Router();

// Route to create a new teacher
router.post("/", createTeacher);

// Route to get all teachers
router.get("/getall", getAllTeachers);

export default router;
