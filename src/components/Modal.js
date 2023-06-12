import React from "react";

function Modal({ currentBook, setShowModal }) {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowModal(false);
        }
      }}
    >
      <div className="modal" id="modal">
        <div className="modal__book">
          <h1 className="modal__book--info">
            {currentBook.title} by {currentBook.author}
          </h1>
          <div className="modal__book--img">
            <img src={currentBook.image} alt="book cover" width="20%" />
          </div>
        </div>
        <div className="modal__border"></div>
        <div className="modal__lender">
          {/* Text */}
          <div className="modal__lender--text">
            <div className="lender__info">
              <p className="lender__info--title">Lender</p>
              <p className="lender__info--content">{currentBook.lender.name}</p>
            </div>
            <div className="lender__info">
              <p className="lender__info--title">Area</p>
              <p className="lender__info--content">
                {currentBook.lender.location}
              </p>
            </div>
            <div className="lender__info">
              <p className="lender__info--title">Lender's Review</p>
              <div className="lender__info--content">
                {currentBook.lender.recommendation}
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="modal__lender--img"></div>
        </div>
        <div className="modal__btn--container">
          <button className="modal__btn modal__btn--borrow">Borrow</button>
          <button
            className="modal__btn modal__btn--close"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
