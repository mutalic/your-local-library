import "./App.css";
import bookData from "./data/books";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  // State
  let [books, setBooks] = useState(bookData);
  let [isChecked, setIsChecked] = useState(false);

  function filterAvailableBooks(books) {
    return books.filter(function (book) {
      return book.availability;
    });
  }

  useEffect(() => {
    console.log(isChecked);
    if (isChecked) {
      setBooks(filterAvailableBooks(books));
    }
    if (!isChecked) {
      setBooks(bookData);
    }
  }, [isChecked]);

  return (
    <main className="grid-container">
      {/* Nav Bar */}

      <div className="nav">
        <h1 className="nav__title">Your Local Library</h1>
        <ul className="nav__menu">
          <li className="nav__item">Wishlist</li>
          <li className="nav__item">Bookshelf</li>
          <li className="nav__item">Account</li>
        </ul>
        <h2 className="nav__greetings">
          Hello, <span id="nav__user-name">Jason</span>
        </h2>
      </div>

      {/* Side Bar */}
      <div className="side-bar">
        <div className="side-bar__search--container bold">
          <label htmlFor="search-input">Booksearch </label>
          <input
            id="search-input"
            type="text"
            placeholder="Type book to search"
            className="side-bar__search--input"
          />
        </div>
        <div className="side-bar__filter">
          <form className="side-bar__filter--container">
            <h3 className="bold">Filter</h3>
            <div
              className="side-bar__filter--availability checkbox-container"
              onClick={() => {
                setIsChecked(!isChecked);
              }}
            >
              <label htmlFor="filter-availability">Availability</label>
              <input
                type="checkbox"
                id="filter-availability"
                className="checkbox"
                checked={isChecked}
              />
            </div>
            {/* <div className="side-bar__filter--security-deposit checkbox-container">
              <label htmlFor="filter-security-deposit">Security Deposit</label>
              <input
                type="checkbox"
                id="filter-security-deposit"
                className="checkbox"
              />
            </div> */}
          </form>
        </div>
      </div>
      {/* Books */}
      <div className="books">
        {books.map(function (book) {
          return (
            <div className="book" id={book.id}>
              <div className="book__img">
                <img src={book.image} alt="book cover" width="100%" />
              </div>
              <div className="book__info">
                <h4 className="book__info--title bold">{book.title}</h4>
                <h5 className="book__info--author">{book.author}</h5>
                <h6 className="book__info--publisher">{book.publisher}</h6>
                <p className="book__info--availability">
                  {book.availability ? "Available" : "Unavailable"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
