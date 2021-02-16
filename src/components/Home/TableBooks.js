import React from "react";
import { TableBooksContainer, DeleteIcon } from "../../styles/TableBooks";

const TableBooks = ({ bookLists, params }) => {
  // bookLists.map(
  //   (list) =>
  //     list.listUrl === params.name &&
  //     list.books.map((book) =>
  //       book ? console.log("existe") : console.log("no existe")
  //     )
  // );
  // );
  {
    bookLists &&
      bookLists
        .filter((list) => list.listUrl === params.name)
        .map((list) =>
          list.books.length > 0
            ? list.books.map((book) => console.log(book))
            : console.log("no existo")
        );
  }
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
        {/* esto lo podria componentizar porque hay muchas instancias donde hago un map de este array */}
        {bookLists &&
          bookLists
            .filter((bookList) => bookList.listUrl === params.name)
            .map((bookList) =>
              bookList.books.length > 0 ? (
                bookList.books.map((book) => (
                  <tr>
                    <td>
                      <img src={book.imageLinks.smallThumbnail} />
                    </td>
                    <td>{book.title}</td>
                    <td>{book.authors}</td>
                    <td>{book.pageCount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No books have been added.</td>
                </tr>
              )
            )}
      </tbody>
    </TableBooksContainer>
  );
};

export default TableBooks;
