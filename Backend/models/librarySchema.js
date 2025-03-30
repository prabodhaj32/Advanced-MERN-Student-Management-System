import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

// Correct the model name to 'Book' instead of 'Library'
export const Book = mongoose.model('Book', librarySchema);
