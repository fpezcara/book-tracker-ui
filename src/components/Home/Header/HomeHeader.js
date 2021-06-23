import React, { useContext } from "react";
import BookListsSelect from "./BookListsSelect";
import Button from "../../Button/Button";
import BookTrackerContext from "../../../context/book-tracker-context";
import { Header } from "../../../styles/Home.style";

const HomeHeader = () => {
  const { state } = useContext(BookTrackerContext);
  const { bookLists, currentBookList } = state;

  return (
    <Header>
      <section>
        <BookListsSelect bookLists={bookLists}>
          <h3>
            {currentBookList.charAt(0).toUpperCase() + currentBookList.slice(1)}
          </h3>
        </BookListsSelect>
      </section>

      <section>
        <Button value={`/${currentBookList}/add-book`} title="Add book" />
      </section>
    </Header>
  );
};

export default HomeHeader;
