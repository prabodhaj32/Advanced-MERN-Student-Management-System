import express from "express";
import { getAllExams, addExam } from "../controllers/examController.js";

const router = express.Router();

// Get all exams
router.get('/getall', getAllExams);

// Add a new exam
router.post('/', addExam);

export default router;
