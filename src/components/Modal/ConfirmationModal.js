import React, { useContext } from "react";
import {
  ModalContainer,
  ModalText,
  ModalButton,
} from "../../styles/Modal.style";
import { useParams } from "react-router-dom";

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
  const { updateCurrentBookList, addBook, deleteBook } =
    useContext(BookTrackerContext);
  const { name } = useParams();

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
                  {` by ${authors.map((author, i) =>
                    i > 1 ? `${author} , ` : author
                  )}
                  `}
                </span>
              )}
            </ModalText>
            <ModalButton>
              <Button
                name="accept"
                className="button accept"
                value={`/${name}`}
                onClickHandler={onClickHandler}
                title="Accept"
              />
              <Button
                name="cancel"
                className="button cancel"
                value={`/${name}`}
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
