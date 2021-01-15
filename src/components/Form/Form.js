import React, { useEffect, useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchBook from "../Search/SearchBook";
import { useHistory, useParams } from "react-router-dom";

const Form = () => {
  const [searchInput, setSearchInput] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [selectType, setSelectType] = useState("");
  const [data, setData] = useState("");
  console.log(useParams());
  const inputTextHandler = (e) => {
    setSearchInput(e.target.value);
    setTriggerSearch(true)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setData(searchInput.text)
    // history.push(`/search/${selectType}`);
  };
  console.log(searchInput);

  const statusHandler = (e) => {
    setSelectType(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // onChange={(e) => setData(e.target.value)}
          onChange={inputTextHandler}
          value={searchInput}
          placeholder="Search by Title, Author or ISBN"
        />
        <select onChange={statusHandler}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="isbn">ISBN</option>
        </select>
        <AddCircleIcon onClick={() => console.log("fui clickeado")} />
      </form>
      {triggerSearch && <SearchBook selectType={selectType} searchInput={searchInput} />}
    </>
  );
};

export default Form;
