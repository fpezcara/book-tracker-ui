import React, { useContext } from "react";
import {
  ModalContainer,
  ModalText,
  ModalButton,
} from "../../styles/Modal.style";
import { useHistory, useParams } from "react-router-dom";

import BookTrackerContext from "../../context/book-tracker-context";

const ConfirmationModal = ({
  hideModal,
  isVisible,
  message,
  book,
  title,
  authors,
}) => {
  const history = useHistory();

  const { addBook, deleteBook } = useContext(BookTrackerContext);
  const { name } = useParams();

  const onChangeHandler = ({ target }) => {
    // message === "add" ? addBook(book) : deleteBook(book);
    history.push(`/${name}`);
    message === "add" ? addBook(book) : deleteBook(book);
    hideModal();
    console.log(message);
  };

  console.log(book);

  // aca reemplazar los buttons por el componente Button
  return (
    <>
      {isVisible ? (
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
                name="accept"
                onClick={onChangeHandler}
                className="button accept"
                type="submit"
              >
                Accept
              </button>
              <button
                name="cancel"
                onClick={onChangeHandler}
                className="button cancel"
                type="submit"
              >
                Cancel
              </button>
            </ModalButton>
          </article>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default ConfirmationModal;
