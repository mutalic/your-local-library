import "./Sidebar.css";
import React from "react";

function Sidebar({
  currentInput,
  setCurrentInput,
  filterBooks,
  isCheckedAvailability,
  setIsCheckedAvailability,
  isCheckedDeposit,
  setIsCheckedDeposit,
  wishList,
  setWishList,
  innerWidthX,
}) {
  return (
    <div className="side-bar">
      {/* Searchbar */}
      <div id="booksearch" className="side-bar__search--container bold">
        <label htmlFor="search-input">Booksearch </label>
        <input
          id="search-input"
          type="text"
          placeholder="Type book to search"
          className="side-bar__search--input"
          onInput={(e) => {
            setCurrentInput(e.target.value);
            filterBooks(currentInput);
          }}
        />
      </div>

      {/* Filter Options */}
      <div id="filter" className="side-bar__filter">
        <form className="side-bar__filter--container">
          <h3 className="bold">Filter</h3>
          {/* Availability */}
          <div
            className="side-bar__filter--availability checkbox-container"
            onClick={() => {
              setIsCheckedAvailability(!isCheckedAvailability);
            }}
          >
            <label htmlFor="filter-availability">Available</label>
            <input
              type="checkbox"
              id="filter-availability"
              className="checkbox"
              checked={isCheckedAvailability}
            />
          </div>
          {/* Security Deposit */}
          <div
            className="side-bar__filter--security-deposit checkbox-container"
            onClick={() => {
              setIsCheckedDeposit(!isCheckedDeposit);
            }}
          >
            <label htmlFor="filter-security-deposit">No Security Deposit</label>
            <input
              type="checkbox"
              id="filter-security-deposit"
              className="checkbox"
              checked={isCheckedDeposit}
            />
          </div>
        </form>
      </div>

      {/* Wishlist */}
      {innerWidthX < 900 ? (
        <></>
      ) : (
        <div id="wishlist" className="side-bar__wishlist--container">
          <h3 className="bold">Wishlist</h3>
          <div className="side-bar__wishlist">
            {wishList.map(function (book) {
              return (
                <div className="side-bar__wishlist--book" key={book.id}>
                  <p>{book.title}</p>
                  <button
                    className="btn__remove-from-wishlist"
                    id={book.id}
                    onClick={(e) => {
                      let newWishList = wishList.filter(function (book) {
                        return book.id.toString() !== e.target.id;
                      });
                      setWishList(newWishList);
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
