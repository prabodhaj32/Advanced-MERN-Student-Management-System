import express from "express";
import { studentSignIn, teacherSignIn, adminSignIn, adminRegister } from "../controllers/usersController.js";

const router = express.Router();

// Sign-in routes
router.post('/student/signin', studentSignIn);
router.post('/teacher/signin', teacherSignIn);
router.post('/admin/signin', adminSignIn);  // ✅ Ensure this is present

// Admin registration
router.post('/admin/register', adminRegister);

export default router;
