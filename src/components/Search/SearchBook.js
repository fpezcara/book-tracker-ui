import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchResults from "./SearchResults";
import { TableSearchBook } from "../../styles/Search";

const apiKey = process.env.REACT_APP_API_KEY;
const urlName = process.env.REACT_APP_TITLE_URL;

const SearchBook = ({
  selectType,
  searchInput,
  triggerSearch,
  selectedBook,
  setSelectedBook,
}) => {
  const [triggeredApi, setTriggeredApi] = useState("");

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
    <TableSearchBook>
      {triggerSearch &&
        searchResult.items &&
        searchResult.items.map((result, i) => (
          <SearchResults
            result={result.volumeInfo}
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
            searchInput={searchInput}
            key={i}
            id={i}
          />
        ))}
    </TableSearchBook>
  );
};

export default SearchBook;
