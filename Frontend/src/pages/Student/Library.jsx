import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const LibrarySection = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  // Fetch books from API
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/library/getall");
      setBooks(response.data.books || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Error fetching books.");
    }
  };

  const handleBorrowBook = (id) => {
    // Implement borrow book functionality here
    console.log(`Book with ID ${id} has been borrowed.`);
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
      <Sidebar />


      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Library</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Books List */}
        <ul className="space-y-4">
          {books.length > 0 ? (
            books.map((book) => (
              <li key={book._id} className="bg-white p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold">{book.bookname}</h3>
                <p className="text-gray-600">Author: {book.author}</p>

                {!book.borrowed ? (
                  <button
                    onClick={() => handleBorrowBook(book._id)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Borrow
                  </button>
                ) : (
                  <p className="text-green-600 font-semibold">Borrowed</p>
                )}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No books available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LibrarySection;
