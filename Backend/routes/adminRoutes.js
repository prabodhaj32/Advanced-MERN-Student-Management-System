// routes/adminRoutes.js
import express from "express";
import { adminRegister } from "../controllers/adminRegisterController.js"; // Adjust this import as per your setup

const router = express.Router();

// POST route for registering an admin
router.post("/", adminRegister);  // Handle POST requests to /api/admin

export default router;
