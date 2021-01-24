import React, { useEffect, useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchBook from "../Search/SearchBook";

const Form = () => {
  const [searchInput, setSearchInput] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [selectType, setSelectType] = useState("title");
  const [bookSelected, setBookSelected] = useState(null);

  // const [addedBooks, setAddedBooks] = useState([]); //despues buscar si es una buena idea hacer un estado separado con booksNowReading, booksAlreadyRead, booksWishlist

  const inputTextHandler = (e) => {
    setSearchInput(e.target.value);
    setTriggerSearch(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setData(searchInput.text)
    // history.push(`/search/${selectType}`);
  };

  const statusHandler = (e) => {
    setSelectType(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
      <SearchBook
        selectType={selectType}
        searchInput={searchInput}
        statusHandler={statusHandler}
        triggerSearch={triggerSearch}
      />
    </>
  );
};

export default Form;
