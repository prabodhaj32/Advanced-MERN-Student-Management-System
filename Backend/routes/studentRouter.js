import express from "express";
import { getAllStudents, createStudent } from "../controllers/studentController.js";

const router = express.Router();

// Get all students
router.get('/getall', getAllStudents);

// Create a new student
router.post('/', createStudent);

export default router;
