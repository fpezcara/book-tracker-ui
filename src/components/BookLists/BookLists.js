import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BookListsContainer } from "../../styles/Book";
import ShowBookList from "./ShowBookList";

const BookLists = ({ addedBook }) => {
  const [listByUser, setListByUser] = useState([]);

  const [lists, setLists] = useState([
    { listName: "Now Reading", booksAdded: [] },
    { listName: "Already Finished", booksAdded: [] },
    { listName: "Book Wishlist", booksAdded: [] },
  ]);

  const params = useParams();
  // console.log(params);

  const bookListsHandler = (e) => {
    console.log(e.target.value);
  };

  // hacer un switch para si elige tal, que se me agregue a ese estado. Fijarme donde agregar estos.  Tal vez puedo agregarlo directamente al react router dom
  return (
    <BookListsContainer>
      <select onChange={bookListsHandler}>
        {lists.map((list, i) => (
          <option key={i} value={list.listName}>
            {list.listName}
          </option>
        ))}
        {/* <option value="added-by-user">Add more...</option> */}
      </select>

      <ShowBookList addedBook={addedBook} />
    </BookListsContainer>
  );
};

export default BookLists;
