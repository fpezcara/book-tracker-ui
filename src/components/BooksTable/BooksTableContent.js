import React from "react";
import imageNotAvailable from "../../assets/image-not-available.svg";
import { DeleteIcon } from "../../styles/BooksTable";

const BooksTableContent = ({ bookList }) => {
console.log(bookList)
  return (
    <>
      {bookList && bookList.books.length > 0 ? (
        bookList.books.map((book) => (
          <tr key={Math.round(Math.random() * 200)}>
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
              <DeleteIcon />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No books have been added.</td>
        </tr>
      )}
    </>
  );
};

export default BooksTableContent;
