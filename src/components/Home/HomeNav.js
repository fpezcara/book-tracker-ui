import React from "react";
import { useHistory } from "react-router-dom";
import BookListsSelect from "../BookListsSelect/BookListsSelect";
import { NavRightSide, NavLeftSide } from "../../styles/Home.js";

const HomeNav = ({ name }) => {
  const history = useHistory();

  const addButtonHandler = () => {
    history.push(`/book-lists/${name}/add-book`);
  };
  return (
    <header>
      <NavLeftSide>
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <BookListsSelect />
      </NavLeftSide>
      <NavRightSide>
        <button onClick={addButtonHandler}>Add Book</button>
      </NavRightSide>
    </header>
  );
};

export default HomeNav;
