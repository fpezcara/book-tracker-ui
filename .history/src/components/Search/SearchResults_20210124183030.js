import React, { useState } from "react";

const SearchResults = ({ result, addedBooks, setAddedBooks }) => {
  // console.log(result.imageLinks && (result.imageLinks.smallThumbnail || "N/A"));
  console.log("search results, " + result);

  // const [addedBooks, setAddedBooks] = useState([]);

  const addBookHandler = () => {
    // este es el paso previo a que el usuario apriete el boton de add
    setAddedBooks([...addedBooks, result]);
  };
  console.log("addedbooks ", addedBooks);

  return (
    <div onClick={addBookHandler}>
      <ul>
        <li>
          <span>{result.title}</span>
        </li>
        <li>
          <span>{result.author}</span>
        </li>
        <li>
          <img
            src={
              result.imagesLinks
                ? result.imageLinks.smallThumbnail
                : "https://books.google.com/books/content?id=Pzw3AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default SearchResults;

// title={result.volumeInfo.title}
// author={result.volumeInfo.authors}
// img={
//   result.volumeInfo.imageLinks &&
//   (result.volumeInfo.imageLinks.smallThumbnail || "N/A")
// }
// pagesTotal={result.volumeInfo.pageCount}
// isbn={
//   result.volumeInfo.industryIdentifiers &&
//   (result.volumeInfo.industryIdentifiers[0].identifier || "N/A")
// }
