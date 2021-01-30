import React, { useState } from "react";
import Form from "../Form/Form";
import SearchBook from "../Search/SearchBook";
import BookLists from "../Book/BookLists";
import NavBar from "../NavBar/NavBar";
import { HomeContainer } from "../../styles/Home";

const Home = () => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [selectType, setSelectType] = useState("title");
  const [searchInput, setSearchInput] = useState("");

  return (
    <HomeContainer>
      <div>
        <NavBar />
        <Form
          searchInput={searchInput}
          setTriggerSearch={setTriggerSearch}
          setSelectType={setSelectType}
          setSearchInput={setSearchInput}
        />
        <SearchBook
          selectType={selectType}
          searchInput={searchInput}
          triggerSearch={triggerSearch}
        />
        <BookLists />
      </div>
    </HomeContainer>
  );
};

export default Home;
