import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BookTrackerContext } from "../Context/BookTrackerContext";

const BookListsSelect = () => {
  const [bookLists] = useContext(BookTrackerContext);
  const history = useHistory();
  const { name } = useParams();
  // const [currentList, setCurrentList] = useState("reading");

  const bookListsHandler = ({ target }) => {
    history.push(`/book-lists/${target.value}`);
  };

  return (
    <select value={name} onChange={bookListsHandler}>
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
