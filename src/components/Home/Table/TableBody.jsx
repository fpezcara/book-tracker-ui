import imageNotAvailable from "../../../assets/image-not-available.svg";
import Cookies from "js-cookie";

import { DeleteIcon } from "../../../styles/Table.style";

const TableBody = ({ bookLists, showModal, setBookToDelete }) => {
  const currentBookList = Cookies.get("currentBookList");
  const bookList = bookLists.find(
    (book) => book.name.toLowerCase() === currentBookList,
  );

  const handleDelete = (bookSelected) => {
    setBookToDelete(bookSelected);
    showModal();
  };

  return (
    <tbody data-testid="book-list-table">
      {bookList?.books.length > 0 ? (
        bookList.books.map((book, i) => (
          <tr key={book.title}>
            <td>
              <img
                src={book.cover_image ? book.cover_image : imageNotAvailable}
                alt={book.title}
              />
            </td>
            <td>{book.title || "N/A"}</td>
            <td>
              {book.authors
                ? book.authors.map((author, i) => (i ? ", " : "") + author)
                : "N/A"}
            </td>
            <td>{book.page_count ? book.page_count : "N/A"}</td>
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
