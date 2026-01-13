import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { BookOpen, User, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LibrarySection = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borrowing, setBorrowing] = useState({});

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/library/getall");
      setBooks(response.data.books || []);
      setError(null);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Error fetching books. Please try again later.");
      toast.error("Error fetching books");
    } finally {
      setLoading(false);
    }
  };

  const handleBorrowBook = async (bookId) => {
    try {
      setBorrowing(prev => ({ ...prev, [bookId]: true }));
      const response = await axios.post(`http://localhost:8000/api/library/${bookId}/borrow`);
      toast.success("Book borrowed successfully!");
      fetchBooks(); // Refresh books list
    } catch (error) {
      console.error("Error borrowing book:", error);
      toast.error(error.response?.data?.message || "Error borrowing book. Please try again.");
    } finally {
      setBorrowing(prev => ({ ...prev, [bookId]: false }));
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/30">
      <Sidebar />
      <ToastContainer position="top-right" />

      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Library</h1>
          <p className="text-gray-600">Browse and borrow books from the school library</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-slide-down">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Books List */}
        {loading ? (
          <div className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-soft border border-gray-100">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
              <p className="text-gray-600">Loading books...</p>
            </div>
          </div>
        ) : books.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-soft p-12 border border-gray-100 text-center animate-slide-up">
            <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg">No books available</p>
            <p className="text-gray-500 text-sm mt-2">Check back later for new books</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={book._id || book.id}
                className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {book.bookname}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-4">
                      <User className="w-4 h-4" />
                      <p className="text-sm">{book.author}</p>
                    </div>
                  </div>
                </div>

                {!book.borrowed ? (
                  <button
                    onClick={() => handleBorrowBook(book._id || book.id)}
                    disabled={borrowing[book._id || book.id]}
                    className={`w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-medium hover:shadow-large transform hover:-translate-y-0.5 ${
                      borrowing[book._id || book.id] ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {borrowing[book._id || book.id] ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Borrowing...</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-5 h-5" />
                        <span>Borrow Book</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="flex items-center justify-center space-x-2 p-3 bg-green-50 rounded-xl border border-green-200">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">Already Borrowed</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LibrarySection;
