import React, { useContext } from "react";
import {
  ModalContainer,
  ModalText,
  ModalButton,
} from "../../styles/Modal.style";
import { useParams } from "react-router";
import useUniqueBook from "../../hooks/useUniqueBook";

import Button from "../Button";

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
    message === "add" && !isBookRepeated ? addBook(book) : deleteBook(book);
    hideModal();
    updateCurrentBookList(name);
  };

  return (
    <>
      {isVisible && (
        <ModalContainer>
          <div>
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
                title="accept"
                className="button accept"
                value={`/${name}`}
                onClickHandler={onClickHandler}
                dataTestId="confirmation-modal-accept-button"
              />
              <Button
                title="cancel"
                className="button cancel"
                onClickHandler={hideModal}
                dataTestId="confirmation-modal-cancel-button"
              />
            </ModalButton>
          </div>
        </ModalContainer>
      )}
    </>
  );
};

export default ConfirmationModal;
