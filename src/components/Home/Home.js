import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import BookListsSelect from "./BookListsSelect";
import TableBooks from "./TableBooks";

import { HomeContainer, BookListContainer } from "../../styles/Home.js";
import { BookTrackerContext } from "../Context/BookTrackerContext";

const Home = () => {
  const history = useHistory();
  const params = useParams();

  const [currentList, setCurrentList] = useState("reading");
  const [bookLists, setBookLists] = useContext(BookTrackerContext);
  const addButtonHandler = () => {
    history.push(`/book-lists/${params.name}/add-book`);
  };

  return (
    <HomeContainer>
      <nav>
        <h3>{currentList.charAt(0).toUpperCase() + currentList.slice(1)}</h3>
        <BookListsSelect
          currentList={currentList}
          setCurrentList={setCurrentList}
          bookLists={bookLists}
          setBookLists={setBookLists}
        />
        <button onClick={addButtonHandler}>Add Book</button>
      </nav>
      <BookListContainer>
        <TableBooks bookLists={bookLists} params={params} />
      </BookListContainer>
    </HomeContainer>
  );
};

export default Home;
