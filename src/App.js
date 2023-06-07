import "./App.css";

function App() {
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
        <div className="side-bar__search--container">
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
            <h3>Filter</h3>
            <div className="side-bar__filter--availability checkbox">
              <label htmlFor="filter-availability">Availability</label>
              <input type="checkbox" id="filter-availability" />
            </div>
            <div className="side-bar__filter--security-deposit checkbox">
              <label htmlFor="filter-security-deposit">Security Deposit</label>
              <input type="checkbox" id="filter-security-deposit" />
            </div>
          </form>
        </div>
      </div>
      <div className="books">
        <div className="book">
          <div className="book__img"></div>
          <div className="book__info">
            <h4 className="book__title">Pride and Prejudice</h4>
            <h5 className="book__author">Jane Austen</h5>
            <h6 className="book__publisher">Penguin Classics</h6>
          </div>
        </div>
      </div>
    </main>
  );
}

function Book() {
  return (
    <div className="book">
      <div className="book__img"></div>
      <div className="book__info">
        <h4 className="book__title">Pride and Prejudice</h4>
        <h5 className="book__author">Jane Austen</h5>
        <h6 className="book__publisher">Penguin Classics</h6>
      </div>
    </div>
  );
}

export default App;
