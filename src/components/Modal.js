import React from "react";

function Modal({ currentBook, setShowModal }) {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.id !== "modal") {
          setShowModal(false);
        }
      }}
    >
      <div className="modal" id="modal">
        <div className="modal__book">{currentBook.title}</div>
        <button
          className="btn__close-modal"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
