import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import BookTrackerContext from "../../../context/book-tracker-context";

import Select from "../../Select/Select";

const BookListsSelect = ({ children }) => {
  const { updateCurrentBookList, state } = useContext(BookTrackerContext);

  const { bookLists } = state;

  const history = useHistory();
  const bookListValue = bookLists.map((list) => list.listUrl);

  const bookListsHandler = ({ target }) => {
    const newBookList = target.value;
    updateCurrentBookList(newBookList);
    history.push(`/${target.value}`);
  };
  console.log("booklists en booklistsselect", state);
  return (
    <>
      {children}
      <Select
        selectValue={children.props.children}
        optionValue={bookListValue}
        onChangeHandler={bookListsHandler}
      />
    </>
  );
};

export default BookListsSelect;
