import React from "react";

function Sidebar({
  currentInput,
  setCurrentInput,
  filterBooks,
  isChecked,
  setIsChecked,
}) {
  return (
    <div className="side-bar">
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
      <div className="side-bar__filter">
        <form className="side-bar__filter--container">
          <h3 className="bold">Filter</h3>
          <div
            className="side-bar__filter--availability checkbox-container"
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          >
            <label htmlFor="filter-availability">Available</label>
            <input
              type="checkbox"
              id="filter-availability"
              className="checkbox"
              checked={isChecked}
            />
          </div>
          <div className="side-bar__filter--security-deposit checkbox-container">
            <label htmlFor="filter-security-deposit">Security Deposit</label>
            <input
              type="checkbox"
              id="filter-security-deposit"
              className="checkbox"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
