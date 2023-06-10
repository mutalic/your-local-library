import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Books(props) {
  const { books, isEmpty, currentInput, setWishList, wishList } = props;
  return (
    <div className="books">
      {isEmpty ? (
        <div className="books__empty">
          No results found for "{currentInput}"
        </div>
      ) : (
        books.map(function (book) {
          return (
            <div className="book" key={book.id}>
              <div className="book__img">
                <img src={book.image} alt="book cover" width="100%" />
                <button
                  className="btn__add-to-wishlist"
                  onClick={() => {
                    let newWishList = [
                      ...wishList,
                      { title: book.title, id: book.id },
                    ];
                    setWishList(newWishList);
                  }}
                >
                  <FontAwesomeIcon className="icon__heart" icon={faHeart} />
                </button>
              </div>
              <div className="book__info">
                <h4 className="book__info--title bold">{book.title}</h4>
                <h5 className="book__info--author">{book.author}</h5>
                <h6 className="book__info--publisher">{book.publisher}</h6>
                <div className="book__info--additional">
                  <p className="book__info--availability">
                    {book.availability ? (
                      <span style={{ color: "green", fontSize: "0.8rem" }}>
                        Available
                      </span>
                    ) : (
                      <span style={{ color: "red", fontSize: "0.8rem" }}>
                        Unavailable
                      </span>
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
