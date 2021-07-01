import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import BookTrackerContext from "../../../context/book-tracker-context";

import Select from "../../Select/Select";

const BookListsSelect = ({ children, bookLists }) => {
  const { updateCurrentBookList } = useContext(BookTrackerContext);
  const history = useHistory();
  const bookListValue = bookLists.map((list) => list.listUrl);

  const bookListsHandler = ({ target }) => {
    const newValue = target.value;
    updateCurrentBookList(newValue);
    history.push(`/${newValue}`);
  };

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
