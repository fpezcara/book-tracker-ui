import React, { useState } from "react";
import Form from "../Form/Form";
import SearchBook from "../Search/SearchBook";
import BookLists from "../BookLists/BookLists";
import NavBar from "../NavBar/NavBar";

import { HomeContainer, SearchContainer } from "../../styles/Home.js";

const Home = () => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [selectType, setSelectType] = useState("title");
  const [searchInput, setSearchInput] = useState("");
  const [selectedBook, setSelectedBook] = useState([]);
  const [addedBook, setAddedBook] = useState([]);

  return (
    <HomeContainer>
      <NavBar />
      <SearchContainer>
        <Form
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setTriggerSearch={setTriggerSearch}
          setSelectType={setSelectType}
          selectedBook={selectedBook}
          addedBook={addedBook}
          setAddedBook={setAddedBook}
        />
        <SearchBook
          selectType={selectType}
          searchInput={searchInput}
          triggerSearch={triggerSearch}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
      </SearchContainer>
      <BookLists addedBook={addedBook} />
    </HomeContainer>
  );
};

export default Home;
