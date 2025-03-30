import express from "express";
import { studentSignIn, teacherSignIn, adminRegister } from "../controllers/usersController.js"; // Ensure all methods are imported

const router = express.Router();

// Route to handle student sign-in
router.post('/student/signin', studentSignIn);

// Route to handle teacher sign-in
router.post('/teacher/signin', teacherSignIn);

// Route to handle admin registration
router.post('/admin/register', adminRegister);

export default router;
