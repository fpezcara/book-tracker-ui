import React from "react";
import { FormStyled } from "../../styles/Form";

const Form = ({
  selectType,
  setSelectType,
  setTriggerSearch,
  searchInput,
  setSearchInput,
}) => {
  const inputTextHandler = (e) => {
    setSearchInput(e.target.value);
    setTriggerSearch(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const statusHandler = (e) => {
    setSelectType(e.target.value);
  };

  // const addBookHandler = () => {
  //   setAddedBook(Array.from(new Set(selectedBook)));
  //   setTriggerSearch(false);
  //   setOpenModal(true);
  // };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={inputTextHandler}
        value={searchInput}
        placeholder="Search by Title, Author or ISBN. . ."
      />
      <select value={selectType} onChange={statusHandler}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="isbn">ISBN</option>
      </select>
    </FormStyled>
  );
};

export default Form;
