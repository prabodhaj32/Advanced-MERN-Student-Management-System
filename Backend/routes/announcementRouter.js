import express from "express";
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementController.js"; // Correct path

const router = express.Router();

// Route to get all announcements
router.get('/getall', getAllAnnouncements);

// Route to create a new announcement
router.post('/', createAnnouncement);

export default router;
