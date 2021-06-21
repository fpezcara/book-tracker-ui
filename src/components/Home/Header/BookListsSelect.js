import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import BookTrackerContext from "../../../context/book-tracker-context";

import Select from "../../Select/Select";

const BookListsSelect = ({ children }) => {
  const { bookLists } = useContext(BookTrackerContext);
  const history = useHistory();

  const bookListValue = bookLists && bookLists.map((list) => list.listUrl);

  const bookListsHandler = ({ target }) => {
    history.push(`/${target.value}`);
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
