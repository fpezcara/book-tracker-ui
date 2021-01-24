import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchResults from "./SearchResults";

const apiKey = process.env.REACT_APP_API_KEY;
const urlName = process.env.REACT_APP_TITLE_URL;

const SearchBook = ({ selectType, searchInput, triggerSearch }) => {
  const [triggeredApi, setTriggeredApi] = useState("");
  const [addedBooks, setAddedBooks] = useState([]);
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

  return (
    <>
      {triggerSearch &&
        searchResult.items &&
        searchResult.items.map((result, i) => (
          <div key={i}>
            <SearchResults
              result={result.volumeInfo}
              addedBooks={addedBooks}
              setAddedBooks={setAddedBooks}
            />
          </div>
        ))}
    </>
  );
};

export default SearchBook;
