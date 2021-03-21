import React, { useState, useContext } from "react";
import { ModalContainer, ModalText, ModalButton } from "../../styles/Modal";
import { useHistory, useParams } from "react-router-dom";
import { BookTrackerContext } from "../Context/BookTrackerContext";

const ConfirmationModal = ({ message, book, title, authors, setOpenModal }) => {
  const history = useHistory();
  const { name } = useParams();
  const [bookLists, setBookLists] = useContext(BookTrackerContext);

  const acceptButtonHandler = () => {
    const booksArrayUpdated = bookLists
      .find((list) => list.listUrl === name)
      .books.filter((bookOnList) => bookOnList !== book);

    message === "add"
      ? setBookLists(
          [...bookLists],
          bookLists.map((list) =>
            list.listUrl === name ? list.books.push(book) : list
          )
        )
      : setBookLists(
          bookLists.map((list) =>
            list.listUrl === name
              ? {
                  ...list,
                  books: booksArrayUpdated,
                }
              : list
          )
        );

    setOpenModal(false);
    history.push(`/book-lists/${name}`);
  };

  const cancelButtonHandler = (e) => {
    setOpenModal(false);
    history.push(`/book-lists/${name}`);
  };

  return (
    <ModalContainer>
      <article>
        <ModalText>
          <span className="message"> Do you want to {message}:</span>
          <span className="title"> {title}?</span>
          {authors && <span className="author">by {authors} </span>}
          {/*arreglar authors para si son mas de una */}
        </ModalText>
        <ModalButton>
          <button
            onClick={acceptButtonHandler}
            className="button accept"
            type="submit"
          >
            Accept
          </button>
          <button
            onClick={cancelButtonHandler}
            className="button cancel"
            type="submit"
          >
            Cancel
          </button>
        </ModalButton>
      </article>
    </ModalContainer>
  );
};

export default ConfirmationModal;
