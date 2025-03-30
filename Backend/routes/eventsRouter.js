import express from "express";
import { getAllEvents, createEvents } from "../controllers/eventsController.js";

const router = express.Router();

// Route to get all events
router.get('/getall', getAllEvents);

// Route to create a new event
router.post('/', createEvents);

export default router;
