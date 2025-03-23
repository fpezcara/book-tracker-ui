import React, { useContext } from "react";
import BookListsSelect from "./BookListsSelect";
import Button from "../../Button";
import BookTrackerContext from "../../../context/book-tracker-context";
import {
  Header,
  HeaderLeftSide,
  HeaderRightSide,
} from "../../../styles/Home.style";
import axios from "axios";
import { API_URL } from "../../../constants";
import Cookies from "js-cookie";

const HomeHeader = () => {
  const {
    state: { bookLists, currentBookList },
  } = useContext(BookTrackerContext);
  const userId = Cookies.get("userId");

  axios
    .get(`${API_URL}/users/${userId}/lists`, {
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
    .then((response) => response.data);

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
