import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchResults from "./SearchResults";
import { TableSearchBook } from "../../styles/Search";

const apiKey = process.env.REACT_APP_API_KEY;
const urlName = process.env.REACT_APP_TITLE_URL;

const SearchBook = ({ selectType, searchInput, triggerSearch }) => {
  const [triggeredApi, setTriggeredApi] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [addedBook, setAddedBook] = useState([]);

  const urls = {
    searchByTitle: "intitle",
    searchByAuthor: "inauthor",
    searchByIsbn: "isbn",
  };

  useEffect(() => {
    switch (selectType) {
      case "author":
        setTriggeredApi(urls.searchByAuthor);
        break;
      case "isbn":
        setTriggeredApi(urls.searchByIsbn);
        break;
      default:
        setTriggeredApi(urls.searchByTitle);
        break;
    }
  }, [selectType]);

  const searchResult = useFetch(
    `${urlName}${triggeredApi}:${searchInput}&orderBy=relevance&key=${apiKey}`
  );

  // {
  //   searchResult.items &&
  //     searchResult.items.map((result) =>
  //       console.log(result.volumeInfo.industryIdentifiers && result.volumeInfo)
  //     );
  // }
  console.log(triggerSearch);
  return (
    <TableSearchBook>
      {triggerSearch &&
        searchResult.items &&
        searchResult.items.map((result, i) => (
          <SearchResults
            result={result.volumeInfo}
            addedBook={addedBook}
            setAddedBook={setAddedBook}
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
