import React, { useState } from "react";
import imageNotAvailable from "../../assets/image-not-available.svg";
import { DeleteIcon } from "../../styles/BooksTable";

const BooksTableContent = ({ bookList, setOpenModal, setBookToDelete }) => {
  const [deletedBooksArray, setDeletedBooksArray] = useState([]);
  // agregar el context aca para poder modificar el setBooklist y eliminar el array de books

  const handleDelete = (bookToDelete) => {
    setOpenModal(true);
    setBookToDelete(bookToDelete);
  };

  return (
    <>
      {bookList && bookList.books.length > 0 ? (
        bookList.books.map((book, i) => (
          <tr key={Math.round(Math.random() * 200)} value={book}>
            <td>
              <img
                src={
                  book.imageLinks
                    ? book.imageLinks.smallThumbnail
                    : imageNotAvailable
                }
              />
            </td>
            <td>{book.title || "N/A"}</td>
            <td>{book.authors ? book.authors : "N/A"}</td>
            <td>{book.pageCount ? book.pageCount : "N/A"}</td>
            <td>
              <DeleteIcon vslue={book} onClick={() => handleDelete(book)} />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4">No books have been added.</td>
        </tr>
      )}
    </>
  );
};

export default BooksTableContent;
