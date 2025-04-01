import React from "react";
import BookListsSelect from "./BookListsSelect";
import Button from "../../Button";

import {
  Header,
  HeaderLeftSide,
  HeaderRightSide,
} from "../../../styles/Home.style";

const HomeHeader = ({ bookLists, currentBookList }) => {
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
