import React, { useState } from "react";
import Form from "../Form";
import DropdownList from "../DropdownList";

import { AddBookWrapper, AddBookContainer } from "../../styles/AddBook.style";

const AddBook = () => {
  const [selectType, setSelectType] = useState("title");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <AddBookWrapper>
      <AddBookContainer>
        <Form
          selectType={selectType}
          setSelectType={setSelectType}
          setTriggerSearch={setTriggerSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        {!!searchInput && (
          <DropdownList
            selectType={selectType}
            searchInput={searchInput}
            triggerSearch={triggerSearch}
            setTriggerSearch={setTriggerSearch}
          />
        )}
      </AddBookContainer>
    </AddBookWrapper>
  );
};

export default AddBook;
