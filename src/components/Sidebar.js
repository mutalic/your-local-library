import React from "react";

function Sidebar({
  currentInput,
  setCurrentInput,
  filterBooks,
  isCheckedAvailability,
  setIsCheckedAvailability,
  isCheckedDeposit,
  setIsCheckedDeposit,
}) {
  return (
    <div className="side-bar">
      {/* Searchbar */}
      <div className="side-bar__search--container bold">
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
      <div className="side-bar__filter">
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
      <div className="side-bar__wishlist--container">
        <h3 className="bold">Wishlist</h3>
        <Wishlist />
      </div>
    </div>
  );
}

function Wishlist() {}
export default Sidebar;
