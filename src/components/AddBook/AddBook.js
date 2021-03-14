import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../Form/Form";
import SearchBook from "../Search/SearchBook";
import { AddBookWrapper, AddBookContainer } from "../../styles/AddBook";

const AddBook = () => {
  const [selectType, setSelectType] = useState("title");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <AddBookWrapper>
      <AddBookContainer>
        <button onClick={handleClick}>Go back</button>
        <Form
          selectType={selectType}
          setSelectType={setSelectType}
          setTriggerSearch={setTriggerSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />

        <SearchBook
          selectType={selectType}
          searchInput={searchInput}
          triggerSearch={triggerSearch}
          setTriggerSearch={setTriggerSearch}
        />
      </AddBookContainer>
    </AddBookWrapper>
  );
};

export default AddBook;
