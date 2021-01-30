import React, { useState } from "react";
import { SearchContainer } from "../../styles/Search";

const SearchResults = ({
  result,
  addedBook,
  setAddedBook,
  selectedBook,
  setSelectedBook,
}) => {
  // console.log(result.imageLinks && (result.imageLinks.smallThumbnail || "N/A"));
  const addBookHandler = () => {
    // este es el paso previo a que el usuario apriete el boton de add
    setAddedBook([...addedBook, result]);
    setSelectedBook(result);
  };
  console.log(selectedBook);
  return (
    <SearchContainer onClick={addBookHandler}>
      <button>
        <table>
          <tr>
            <th>{result.title}</th>
          </tr>
          <tr>
            <img
              src={
                result.imageLinks
                  ? result.imageLinks.smallThumbnail
                  : "https://books.google.com/books/content?id=Pzw3AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
              }
            />
          </tr>
        </table>
      </button>
    </SearchContainer>
  );
};

// {
/* <ul>
<li>
  <span>{result.title}</span>
</li>
<li>
  <span>{result.author}</span>
</li>
<li>
  <img
    src={
      result.imageLinks
        // ? result.imageLinks.smallThumbnail
        : "https://books.google.com/books/content?id=Pzw3AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    }
  />
</li>
</ul> */
// }

export default SearchResults;
