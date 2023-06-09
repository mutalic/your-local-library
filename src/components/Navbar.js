import React from "react";

function Navbar() {
  return (
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
  );
}

export default Navbar;
