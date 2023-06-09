import React from "react";
import { Link } from "react-router-dom";

function Books({ books, isEmpty, currentInput }) {
  return (
    <div className="books">
      {isEmpty ? (
        <div className="books__empty">
          No results found for "{currentInput}"
        </div>
      ) : (
        books.map(function (book) {
          return (
            <div className="book" id={book.id}>
              <div className="book__img">
                <img src={book.image} alt="book cover" width="100%" />
              </div>
              <div className="book__info">
                <h4 className="book__info--title bold">{book.title}</h4>
                <h5 className="book__info--author">{book.author}</h5>
                <h6 className="book__info--publisher">{book.publisher}</h6>
                <div className="book__info--additional">
                  <p className="book__info--availability">
                    {book.availability ? (
                      <p style={{ color: "green", fontSize: "0.8rem" }}>
                        Available
                      </p>
                    ) : (
                      <p style={{ color: "red", fontSize: "0.8rem" }}>
                        Unavailable
                      </p>
                    )}
                  </p>
                  <p className="book__info--security-deposit">
                    Security Deposit: ${book.deposit}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Books;
