import React, { useContext } from "react";
import {
  ModalContainer,
  ModalText,
  ModalButton,
} from "../../styles/Modal.style";
import { useParams } from "react-router";
import { addBookToList, removeBookFromList } from "../../utils/requests";

import Button from "../Button";

import BookTrackerContext from "../../context/book-tracker-context";
import Cookies from "js-cookie";

const ConfirmationModal = ({
  hideModal,
  isVisible,
  message,
  book,
  title,
  authors,
}) => {
  const { lists, updateCurrentBookList } = useContext(BookTrackerContext);

  const { name } = useParams();

  const userId = Cookies.get("userId");
  const currentBookList = Cookies.get("currentBookList");
  const currentBookListId = lists.find(
    (list) => list.name.toLowerCase() === currentBookList,
  )?.id;

  const onClickHandler = async () => {
    message === "add"
      ? await addBookToList(userId, currentBookListId, book)
      : await removeBookFromList(userId, currentBookListId, book.id);
    hideModal();
    updateCurrentBookList(name);
  };

  return (
    <>
      {isVisible && (
        <ModalContainer>
          <div data-testid="confirmation-modal">
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
