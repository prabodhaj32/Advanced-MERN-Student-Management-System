import express from "express";
import { getAllBooks, createBook } from "../controllers/libraryConroller.js";

const router = express.Router();

// GET all books
router.get('/getall', getAllBooks);

// POST to create a new book
router.post('/', createBook); // Changed from '/books' to '/'

// Export the router
export default router;
