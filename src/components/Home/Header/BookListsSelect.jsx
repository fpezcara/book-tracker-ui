import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookTrackerContext from "../../../context/book-tracker-context";

import Select from "../../Select";

const BookListsSelect = ({ children, bookLists }) => {
  const { updateCurrentBookList } = useContext(BookTrackerContext);
  const navigate = useNavigate();
  const bookListValue = bookLists.map((list) => list.listUrl);

  const bookListsHandler = ({ target }) => {
    const newValue = target.value;
    updateCurrentBookList(newValue);
    navigate(`/${newValue}`);
  };

  return (
    <>
      {children}
      <Select
        selectValue={children.props.children}
        optionValue={bookListValue}
        onChangeHandler={bookListsHandler}
        dataTestId="booklist-select"
      />
    </>
  );
};

export default BookListsSelect;
