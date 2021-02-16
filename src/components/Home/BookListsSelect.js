import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BookTrackerContext } from "../Context/BookTrackerContext";

const BookListsSelect = ({ currentList, setCurrentList }) => {
  // tal vez guardar esto en la carpeta que se llama BookList
  const [bookLists, setBookLists] = useContext(BookTrackerContext);
  const history = useHistory();
  const bookListsHandler = ({ target }) => {
    setCurrentList(target.value);
    history.push(`/book-lists/${target.value}`);
    // history.push(`/book-lists/${target.value}`);
  };
  return (
    <select value={currentList} onChange={bookListsHandler}>
      {bookLists.map((list, i) => (
        <option key={i} value={list.listUrl}>
          {list.listName}
        </option>
      ))}
      {/* <option value="added-by-user">Add more...</option> */}
    </select>
  );
};

export default BookListsSelect;
