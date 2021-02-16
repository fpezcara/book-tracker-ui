import React, { useState } from "react";
import ConfirmationModal from "../Modal/ConfirmationModal";
import SearchBook from "../Search/SearchBook";
import Form from "./Form";

const AddBook = () => {
  const [addedBook, setAddedBook] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Form setAddedBook={setAddedBook} setOpenModal={setOpenModal} />
      {openModal && (
        <>
          {addedBook.map((book, i) => (
            <ConfirmationModal
              key={i}
              book={book}
              title={book.title}
              authors={book.authors}
              setOpenModal={setOpenModal}
            />
          ))}
        </>
      )}
    </>
  );
};

export default AddBook;
