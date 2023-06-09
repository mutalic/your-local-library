import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// Data
import bookList from "./data/books";
// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Books from "./components/Books";

function App() {
  /* State */
  let [books, setBooks] = useState(bookList);
  let [isChecked, setIsChecked] = useState(false);
  let [isEmpty, setIsEmpty] = useState(false);
  let [currentInput, setCurrentInput] = useState("");

  /* Functions */
  function filterBooks(input) {
    // Utility Functions
    function filterAvailableBooks(books) {
      return books.filter(function (book) {
        return book.availability;
      });
    }
    function noWhiteSpace(str) {
      return str.trim().split(" ").join("").toLowerCase();
    }

    // 1. Filter by input
    let regexp = new RegExp(noWhiteSpace(input));
    let filteredBooks = bookList.filter(function (book) {
      if (regexp.test(noWhiteSpace(book.title))) {
        return true;
      }
      if (regexp.test(noWhiteSpace(book.author))) {
        return true;
      }
    });

    // 2. Check state (isChecked)
    if (isChecked) {
      filteredBooks = filterAvailableBooks(filteredBooks);
    }

    // 3. Update state (books)
    setBooks(filteredBooks);
  }

  /* UseEffect */

  useEffect(() => {
    // Filter search results according to user input & filter option (availability).
    filterBooks(currentInput);

    // Check for empty search results
    if (books.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [isChecked, currentInput]);

  /* JSX */
  return (
    <>
      {/* Routes */}
      <Routes></Routes>

      {/* Main Page */}
      <main className="grid-container">
        <Navbar />
        <Sidebar
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          filterBooks={filterBooks}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <Books books={books} isEmpty={isEmpty} currentInput={currentInput} />
      </main>
    </>
  );
}

export default App;
