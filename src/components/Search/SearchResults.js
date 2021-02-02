import React from "react";
import { SearchContainer, SearchResult } from "../../styles/Search";
import imageNotAvailable from "../../assets/image-not-available.svg";

const SearchResults = ({
  result,
  addedBook,
  setAddedBook,
  setSelectedBook,
  searchInput,
  id,
}) => {
  // console.log(result.imageLinks && (result.imageLinks.smallThumbnail || "N/A"));
  const selectBookHandler = () => {
    // este es el paso previo a que el usuario apriete el boton de add
    setAddedBook([...addedBook, result]);
    setSelectedBook(result);
  };
  console.log(id);

  return (
    <>
      {/* necesito agregar un boton para cuando el usuario lo aprieta se me muestran 5 resultados mas, y asi sucesivamente, puedo poner id < x y esta x setearla para que cuando el usuario apriete se vaya sumando 5, (cada vez que el usario apriete more que la x sume 5) */}
      {searchInput !== "" && id < 8 && (
        <SearchResult onClick={selectBookHandler}>
          {/* <button> */}
          <tbody>
            <tr>
              <td>
                <img
                  src={
                    result.imageLinks
                      ? result.imageLinks.smallThumbnail
                      : imageNotAvailable
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <span>{result.title}</span>
              </td>
            </tr>
          </tbody>
          {/* </button> */}
        </SearchResult>
      )}
    </>
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
