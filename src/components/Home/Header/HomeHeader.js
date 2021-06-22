import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BookListsSelect from "./BookListsSelect";
import Button from "../../Button/Button";
import BookTrackerContext from "../../../context/book-tracker-context";
import { Header } from "../../../styles/Home.style";

const HomeHeader = () => {
  const { name } = useParams();
  const { state } = useContext(BookTrackerContext);
  const { bookLists, updateCurrentBookList } = state;

  return (
    <Header>
      <section>
        <BookListsSelect bookLists={bookLists}>
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        </BookListsSelect>
      </section>

      <section>
        <Button value={`/${name}/add-book`} title="Add book" />
      </section>
    </Header>
  );
};

export default HomeHeader;
