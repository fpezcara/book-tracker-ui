import React from "react";
import { TableBooksContainer, DeleteIcon } from "../../styles/TableBooks";

const TableBooks = ({ bookLists, params }) => {
  bookLists.map(
    (list) =>
      list.listUrl === params.name &&
      list.books.map((book) =>
        book ? console.log("existe") : console.log("no existe")
      )
  );
  console.log(bookLists);
  return (
    <TableBooksContainer>
      <tbody>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
        </tr>
        {
          // bookLists &&
          bookLists.map((bookList) => {
            bookList.listUrl === params.name && (
              <>
                {bookList.books.length !== 1 ? (
                  bookList.books.map((book) => (
                    <tr key={book.industryIdentifiers[0].identifier}>
                      <td>
                        <img
                          src={book.imageLinks.smallThumbnail}
                          alt={book.title}
                        />
                      </td>
                      <td>{book.title}</td>
                      <td>{book.authors || "N/A"}</td>
                      <td>{book.pageCount || "N/A"}</td>
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
          })
        }
      </tbody>
    </TableBooksContainer>
  );
};

export default TableBooks;
