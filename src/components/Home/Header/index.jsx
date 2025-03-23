import React, { useContext } from "react";
import BookListsSelect from "./BookListsSelect";
import Button from "../../Button";
import BookTrackerContext from "../../../context/book-tracker-context";
import {
  Header,
  HeaderLeftSide,
  HeaderRightSide,
} from "../../../styles/Home.style";

import Cookies from "js-cookie";

const HomeHeader = () => {
  const { lists: bookLists } = useContext(BookTrackerContext);

  const currentBookList = Cookies.get("currentBookList");

  return (
    <Header>
      <HeaderLeftSide>
        <BookListsSelect bookLists={bookLists}>
          <h3>{currentBookList}</h3>
        </BookListsSelect>
      </HeaderLeftSide>

      <HeaderRightSide>
        <Button
          value={`/${currentBookList}/add-book`}
          title="Add book"
          className="add-book"
          dataTestId="add-book-button"
        />
      </HeaderRightSide>
    </Header>
  );
};

export default HomeHeader;
