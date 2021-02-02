import React, { useState } from "react";
import Form from "../Form/Form";
import SearchBook from "../Search/SearchBook";
import BookLists from "../Book/BookLists";
import NavBar from "../NavBar/NavBar";
import { HomeContainer, SearchContainer } from "../../styles/Home.js";

const Home = () => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [selectType, setSelectType] = useState("title");
  const [searchInput, setSearchInput] = useState("");

  return (
    <HomeContainer>
      <NavBar />
      <SearchContainer>
        <Form
          searchInput={searchInput}
          setTriggerSearch={setTriggerSearch}
          setSelectType={setSelectType}
          setSearchInput={setSearchInput}
          triggerSearch={triggerSearch}
        />
        <SearchBook
          selectType={selectType}
          searchInput={searchInput}
          triggerSearch={triggerSearch}
          setTriggerSearch={setTriggerSearch}
        />
      </SearchContainer>
      <BookLists />
    </HomeContainer>
  );
};

export default Home;
