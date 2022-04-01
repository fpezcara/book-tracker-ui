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
                className="button accept"
                value={`/${name}`}
                onClickHandler={onClickHandler}
                title="accept"
              />
              <Button
                className="button cancel"
                // value={message === "add" ? `/${name}` : `/${name}/add-book`}
                value={""}
                // onClickHandler={onClickHandler}
                title="cancel"
              />
            </ModalButton>
          </div>
        </ModalContainer>
      )}
    </>
  );
};

export default ConfirmationModal;
