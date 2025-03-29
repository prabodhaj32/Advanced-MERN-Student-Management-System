import express from "express";
import { adminSignIn, studentSignIn, teacherSignIn } from "../controllers/usersController.js";

const router = express.Router();

router.post('/admin/signin', adminSignIn);
// router.post('/student/signin', studentSignIn);
// router.post('/teacher/signin', teacherSignIn);

export default router;
