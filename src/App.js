import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
// Data
import bookList from "./data/bookList";
// Components
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Books from "./components/Books/Books";
import Modal from "./components/Modal/Modal";
// Utility Functions
import debounce from "./utility/debounce";

function App() {
  /* State */
  let [books, setBooks] = useState(bookList);
  let [isCheckedAvailability, setIsCheckedAvailability] = useState(false);
  let [isCheckedDeposit, setIsCheckedDeposit] = useState(false);
  let [isEmpty, setIsEmpty] = useState(false);
  let [currentInput, setCurrentInput] = useState("");
  let [wishList, setWishList] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [currentBook, setCurrentBook] = useState({});
  let [innerWidthX, setInnerWidthX] = useState(window.innerWidth);

  /* Functions */
  function filterBooks(input) {
    // Utility Functions
    function processString(str) {
      return str.trim().split(" ").join("").toLowerCase();
    }

    // 1. Filter by input
    let regexp = new RegExp(processString(input));
    let filteredBooks = bookList.filter(function (book) {
      if (regexp.test(processString(book.title))) {
        return true;
      }
      if (regexp.test(processString(book.author))) {
        return true;
      } else {
        return false;
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
  // 1. Updates state (innerWidthX) whenever page is re-rendered.
  useEffect(() => {
    function handleResize() {
      setInnerWidthX(window.innerWidth);
    }
    const debouncedHandleResize = debounce(handleResize, 500);

    window.addEventListener("resize", debouncedHandleResize);

    return window.addEventListener("resize", debouncedHandleResize);
  });

  /* 2. Calls function 'filterBooks' whenever:
    (1) Filter options (availability or deposit) are checked.
    or
    (2) User input (search bar) is generated.
  */
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
      {showModal ? (
        <Modal currentBook={currentBook} setShowModal={setShowModal} />
      ) : (
        <></>
      )}
      <main id="home">
        {/* Main Page */}
        <div className="grid-container">
          <Navbar />
          <Sidebar
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
            filterBooks={filterBooks}
            isCheckedAvailability={isCheckedAvailability}
            setIsCheckedAvailability={setIsCheckedAvailability}
            isCheckedDeposit={isCheckedDeposit}
            setIsCheckedDeposit={setIsCheckedDeposit}
            wishList={wishList}
            setWishList={setWishList}
            innerWidthX={innerWidthX}
          />
          <Books
            books={books}
            isEmpty={isEmpty}
            currentInput={currentInput}
            wishList={wishList}
            setWishList={setWishList}
            showModal={showModal}
            setShowModal={setShowModal}
            setCurrentBook={setCurrentBook}
          />
        </div>
      </main>
    </>
  );
}

export default App;
