import React, { useContext } from "react";
import imageNotAvailable from "../../../assets/image-not-available.svg";
import useBookList from "../../../hooks/useBookList";
import useModal from "../../../hooks/useModal";

import BookTrackerContext from "../../../context/book-tracker-context";

import { DeleteIcon } from "../../../styles/Table.style";

const TableBody = ({ showModal, setBookToDelete }) => {
  const { bookLists } = useContext(BookTrackerContext);
  const bookList = useBookList(bookLists);

  const handleDelete = (bookSelected) => {
    setBookToDelete(bookSelected);
    showModal();
  };

  console.log(bookLists);
  return (
    <tbody>
      {bookList && bookList.books.length > 0 ? (
        bookList.books.map((book) => (
          <tr key={book.title} value={book}>
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
            <td>{book.authors ? book.authors : "N/A"}</td>
            <td>{book.pageCount ? book.pageCount : "N/A"}</td>
            <td onClick={() => handleDelete(book)}>
              <DeleteIcon />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4">No books have been added.</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
