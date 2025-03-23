import React, { useContext } from "react";
import { useNavigate } from "react-router";
import BookTrackerContext from "../../../context/book-tracker-context";
import Cookies from "js-cookie";

import Select from "../../Select";

const BookListsSelect = ({ children, bookLists }) => {
  const { updateCurrentBookList } = useContext(BookTrackerContext);
  const navigate = useNavigate();
  const bookListValue = bookLists.map((list) => list.name);

  const bookListsHandler = ({ target }) => {
    const newValue = target?.value.toLowerCase();
    updateCurrentBookList(newValue);
    Cookies.set("currentBookList", newValue, {
      secure: true,
    });
    navigate(`/${newValue}`);
  };

  return (
    <>
      {children}
      <Select
        selectValue={children.props.children}
        optionValues={bookListValue}
        onChangeHandler={bookListsHandler}
        dataTestId="booklist-select"
      />
    </>
  );
};

export default BookListsSelect;
