import React, { useState } from "react";
import { ContainerForm, AddIcon } from "../../styles/Form";
import SearchBook from "../Search/SearchBook";

const Form = ({ setAddedBook, setOpenModal }) => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [selectType, setSelectType] = useState("title");
  const [searchInput, setSearchInput] = useState("");
  const [selectedBook, setSelectedBook] = useState([]);

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
    setTriggerSearch(false);
    setOpenModal(true);
  };
  return (
    <>
      <ContainerForm>
        <form onSubmit={handleSubmit}>
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
          <AddIcon onClick={addBookHandler} />
          {/* cuando toco el add que me redireccion a la lista (booklists) donde estoy y de ahi saco la info que tengo que ver como mandar para ahi  */}

          {/* tal vez hacer un componente distinto para el form que se llame form y pongo todo lo qeu esta en el form y adentro de eso pongon searchbook
      despues eso lo agrego a aca - el componente, y la carpeta se puede llamar AddBook, tal vez crear AddBook */}
        </form>
      </ContainerForm>
      <SearchBook
        selectType={selectType}
        searchInput={searchInput}
        triggerSearch={triggerSearch}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
    </>
  );
};

export default Form;
