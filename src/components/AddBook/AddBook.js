import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ConfirmationModal from "../Modal/ConfirmationModal";
import Form from "../Form/Form";
import SearchBook from "../Search/SearchBook";
import { AddBookWrapper, AddBookContainer } from "../../styles/AddBook";

const AddBook = () => {
  const [selectType, setSelectType] = useState("title");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [selectedBook, setSelectedBook] = useState([]);
  const [addedBook, setAddedBook] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();

  console.log(openModal);
  return (
    <AddBookWrapper>
      <AddBookContainer>
        <button onClick={() => history.goBack()}>Go back</button>
        <Form
          selectType={selectType}
          setSelectType={setSelectType}
          setTriggerSearch={setTriggerSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        {openModal && (
          <>
            {addedBook.map((book, i) => (
              <ConfirmationModal
                key={i}
                book={book}
                title={book.title}
                authors={book.authors}
                setOpenModal={setOpenModal}
              />
            ))}
          </>
        )}
        <SearchBook
          selectType={selectType}
          searchInput={searchInput}
          triggerSearch={triggerSearch}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          setOpenModal={setOpenModal}
          setTriggerSearch={setTriggerSearch}
        />
      </AddBookContainer>
    </AddBookWrapper>
  );
};

export default AddBook;
