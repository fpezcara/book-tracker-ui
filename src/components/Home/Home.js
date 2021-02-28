import React, { useContext, useState } from "react";
import { BookTrackerContext } from "../Context/BookTrackerContext";
import { useHistory, useParams } from "react-router-dom";
import BookListsSelect from "../BookListsSelect/BookListsSelect";
import BooksTable from "../BooksTable/BooksTable";

import { HomeContainer, BookListContainer } from "../../styles/Home.js";

const Home = () => {
  const history = useHistory();
  const { name } = useParams();
  const [bookLists] = useContext(BookTrackerContext);
  const addButtonHandler = () => {
    history.push(`/book-lists/${name}/add-book`);
  };

  return (
    <HomeContainer>
      {bookLists &&
        bookLists
          .filter((bookList) => bookList.listUrl.includes(name))
          .map((bookList) => (
            <>
              <nav>
                <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <BookListsSelect />
                <button onClick={addButtonHandler}>Add Book</button>
              </nav>
              <BookListContainer>
                <BooksTable bookList={bookList} />
              </BookListContainer>
            </>
          ))}
    </HomeContainer>
  );
};

export default Home;
