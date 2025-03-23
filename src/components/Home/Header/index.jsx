import React, { useContext, useState, useEffect } from "react";
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
  const [bookLists, setBookLists] = useState([]);
  const {
    lists,
    state: { bookLists: oldBookLists, currentBookList: oldCurrentBookList },
  } = useContext(BookTrackerContext);
  const userId = Cookies.get("userId");
  const currentBookList = Cookies.get("currentBookList");
  // const { bookLists: tryBooks } = await fetchBooks()
  useEffect(() => {
    axios
      .get(`${API_URL}/users/${userId}/lists`, { withCredentials: true })
      .then((response) => setBookLists(response.data));
  }, [userId]);
  console.log("please wooooork", lists);
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
