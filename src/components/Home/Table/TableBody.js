import React, { useContext } from "react";
import imageNotAvailable from "../../../assets/image-not-available.svg";

import BookTrackerContext from "../../../context/book-tracker-context";

import { DeleteIcon } from "../../../styles/Table.style";

const TableBody = ({ showModal, setBookToDelete }) => {
  const {
    state: { bookLists, currentBookList },
  } = useContext(BookTrackerContext);

  const bookList = bookLists.find((bookL) => bookL.listUrl === currentBookList);
  const handleDelete = (bookSelected) => {
    setBookToDelete(bookSelected);
    showModal();
  };

  return (
    <tbody>
      {bookList.books.length > 0 ? (
        bookList.books.map((book) => (
          <tr key={book.infoLink}>
            <td>
              <img
                src={
                  book.imageLinks
                    ? book.imageLinks.smallThumbnail
                    : imageNotAvailable
                }
                alt={book.title}
              />
            </td>
            <td>{book.title || "N/A"}</td>
            <td>
              {book.authors
                ? book.authors.map((author, i) => (i ? ", " : "") + author)
                : "N/A"}
            </td>
            <td>{book.pageCount ? book.pageCount : "N/A"}</td>
            <td onClick={() => handleDelete(book)}>
              <DeleteIcon />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No books have been added.</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
