import React from "react";
import { ModalContainer, ModalText, ModalButton } from "../../styles/Modal";

const ConfirmationModal = ({ title, authors }) => {
  return (
    <ModalContainer>
      <article>
        <ModalText>
          <span className="message"> Do you want to add:</span>
          <span className="title"> {title}?</span>
          <span className="author">by {authors}</span>
        </ModalText>
        <ModalButton>
          <button className="button add" type="submit">
            Add 
          </button>
          <button className="button cancel" type="submit">
            Cancel
          </button>
        </ModalButton>
      </article>
    </ModalContainer>
  );
};

export default ConfirmationModal;
