import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <div className="nav">
      <a href="#home">
        <h1 className="nav__title">Your Local Library</h1>
      </a>
      <ul className="nav__menu">
        <a href="#booksearch">
          <li className="nav__item">Booksearch</li>
        </a>
        <a href="#filter">
          <li className="nav__item">Filter</li>
        </a>
        <a href="#wishlist">
          <li className="nav__item">Wishlist</li>
        </a>
      </ul>
      <h2 className="nav__greetings">
        Hello, <span id="nav__user-name">Jason</span>
      </h2>
    </div>
  );
}

export default Navbar;
