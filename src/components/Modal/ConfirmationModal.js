import React, { useContext } from "react";
import {
  ModalContainer,
  ModalText,
  ModalButton,
} from "../../styles/Modal.style";
import { useParams } from "react-router-dom";
import useUniqueBook from "../../hooks/useUniqueBook";

import Button from "../Button/Button";

import BookTrackerContext from "../../context/book-tracker-context";

const ConfirmationModal = ({
  hideModal,
  isVisible,
  message,
  book,
  title,
  authors,
}) => {
  const {
    updateCurrentBookList,
    state: { currentBookList, bookLists },
    addBook,
    deleteBook,
  } = useContext(BookTrackerContext);

  const { name } = useParams();

  const isBookRepeated = useUniqueBook(bookLists, book, currentBookList);

  const onClickHandler = () => {
    message === "add" ? addBook(book) : deleteBook(book);
    hideModal();
    updateCurrentBookList(name);
  };

  return (
    <>
      {isVisible ? (
        <ModalContainer>
          <article>
            <ModalText>
              <span className="message"> Do you want to {message}:</span>
              <span className="title"> {title}?</span>
              {authors && (
                <span className="author">
                  by {authors.map((author, i) => (i ? ", " : "") + author)}
                </span>
              )}
            </ModalText>
            <ModalButton>
              <Button
                className="button accept"
                value={`/${name}`}
                onClickHandler={!isBookRepeated && onClickHandler}
                title="Accept"
              />
              <Button
                className="button cancel"
                value={`/${name}/add-book`}
                onClickHandler={onClickHandler}
                title="Cancel"
              />
            </ModalButton>
          </article>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default ConfirmationModal;
