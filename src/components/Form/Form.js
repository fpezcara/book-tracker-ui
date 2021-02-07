import React, { useState } from "react";
import { ContainerForm, AddIcon } from "../../styles/Form";
import ConfirmationModal from "../Modal/ConfirmationModal";

const Form = ({
  searchInput,
  setSearchInput,
  setTriggerSearch,
  setSelectType,
  selectedBook,
  addedBook,
  setAddedBook,
}) => {
  const [openModal, setOpenModal] = useState(false);

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

  const addBookHandler = () => {
    setAddedBook(Array.from(new Set(selectedBook)));
    let bookTitle = addedBook.map((book) => book.title);
    setTriggerSearch(false);
    setOpenModal(true);
    console.log("booktitle,", bookTitle);
  };

  console.log("added book,", addedBook);

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={inputTextHandler}
          value={searchInput}
          placeholder="Search by Title, Author or ISBN. . ."
        />
        <select onChange={statusHandler}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="isbn">ISBN</option>
        </select>
        <AddIcon onClick={addBookHandler} />
        {/* cuando toco el add que me redireccion a la lista (booklists) donde estoy y de ahi saco la info que tengo que ver como mandar para ahi  */}
      </form>
      {openModal && (
        <>
          {addedBook.map((book, i) => (
            <ConfirmationModal title={book.title} authors={book.authors} />
          ))}
        </>
      )}
    </ContainerForm>
  );
};

export default Form;
