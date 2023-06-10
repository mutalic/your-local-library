import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
// Data
import bookList from "./data/bookList";
// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Books from "./components/Books";

function App() {
  /* State */
  let [books, setBooks] = useState(bookList);
  let [isCheckedAvailability, setIsCheckedAvailability] = useState(false);
  let [isCheckedDeposit, setIsCheckedDeposit] = useState(false);
  let [isEmpty, setIsEmpty] = useState(false);
  let [currentInput, setCurrentInput] = useState("");

  /* Functions */
  function filterBooks(input) {
    // Utility Functions
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

    // 2. Check state
    // (1) isCheckedAvailability
    if (isCheckedAvailability) {
      filteredBooks = filteredBooks.filter(function (book) {
        return book.availability;
      });
    }
    // (2) isCheckedDeposit
    if (isCheckedDeposit) {
      filteredBooks = filteredBooks.filter(function (book) {
        return book.deposit === 0;
      });
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
  }, [isCheckedAvailability, currentInput, isCheckedDeposit]);

  /* JSX */
  return (
    <>
      {/* Main Page */}
      <main className="grid-container">
        <Navbar />
        <Sidebar
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          filterBooks={filterBooks}
          isCheckedAvailability={isCheckedAvailability}
          setIsCheckedAvailability={setIsCheckedAvailability}
          isCheckedDeposit={isCheckedDeposit}
          setIsCheckedDeposit={setIsCheckedDeposit}
        />
        <Books books={books} isEmpty={isEmpty} currentInput={currentInput} />
      </main>
    </>
  );
}

export default App;
