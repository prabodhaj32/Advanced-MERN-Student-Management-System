import React, { useState } from 'react';
import Sidebar from './Sidebar';

const sampleBooks = [
  { id: 1, bookname: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, bookname: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, bookname: '1984', author: 'George Orwell' },
  { id: 4, bookname: 'Moby Dick', author: 'Herman Melville' },
  { id: 5, bookname: 'Pride and Prejudice', author: 'Jane Austen' },
];

const LibrarySection = () => {
  const [books, setBooks] = useState(sampleBooks);

  const handleBorrowBook = (id) => {
    console.log(`Book with ID ${id} has been borrowed.`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Library</h2>
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.id} className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-lg font-semibold">{book.bookname}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              <button
                onClick={() => handleBorrowBook(book.id)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Borrow
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibrarySection;