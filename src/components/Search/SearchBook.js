import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchResults from "./SearchResults";
import ConfirmationModal from "../Modal/ConfirmationModal";
import { TableSearchBook } from "../../styles/Search";

const apiKey = process.env.REACT_APP_API_KEY;
const urlName = process.env.REACT_APP_TITLE_URL;

// cambiar nombre a dropdownlist
const SearchBook = ({
  selectType,
  searchInput,
  triggerSearch,
  setTriggerSearch,
}) => {
  const [triggeredApi, setTriggeredApi] = useState("");
  const [addedBook, setAddedBook] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    switch (selectType) {
      case "author":
        setTriggeredApi("inauthor");
        break;
      case "isbn":
        setTriggeredApi("isbn");
        break;
      default:
        setTriggeredApi("intitle");
        break;
    }
  }, [selectType]);

  const searchResult = useFetch(
    `${urlName}${triggeredApi}:${searchInput}&orderBy=relevance&key=${apiKey}`
  );

  return (
    <>
      <TableSearchBook>
        {triggerSearch &&
          searchResult.items &&
          searchResult.items.map((result, i) => (
            <SearchResults
              result={result.volumeInfo}
              searchInput={searchInput}
              setOpenModal={setOpenModal}
              setTriggerSearch={setTriggerSearch}
              setAddedBook={setAddedBook}
              key={i}
              id={i}
            />
          ))}
      </TableSearchBook>
      {openModal && (
        <>
          {addedBook.map((book, i) => (
            <ConfirmationModal
              key={i}
              message={"add"}
              book={book}
              title={book.title}
              authors={book.authors}
              setOpenModal={setOpenModal}
            />
          ))}
        </>
      )}
    </>
  );
};

export default SearchBook;
