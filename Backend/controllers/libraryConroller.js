import { Book } from "../models/librarySchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

// Create a new book
export const createBook = async (req, res, next) => {
  const { bookname, author } = req.body;
  
  try {
    // Validation check
    if (!bookname || !author) {
      return next(new Error("Please fill in all required fields!"));
    }

    // Create a new book document in the database
    const newBook = await Book.create({ bookname, author });

    res.status(201).json({
      success: true,
      message: "A new book has been created!",
      book: newBook, // Include the created book object in the response
    });

  } catch (err) {
    next(err); // Pass to the error handling middleware
  }
};

// Get all books
export const getAllBooks = async (req, res, next) => {
  try {
    // Retrieve all books from the database
    const books = await Book.find();

    res.status(200).json({
      success: true,
      books, // Send the list of books in the response
    });

  } catch (err) {
    next(err); // Pass to the error handling middleware
  }
};
