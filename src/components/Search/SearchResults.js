import React, { useState } from "react";
import imageNotAvailable from "../../assets/image-not-available.svg";
import { TableBodySearchResults } from "../../styles/Search";

// este nombre lo podria cambiar a dropdown list
const SearchResults = ({
  result,
  selectedBook,
  setSelectedBook,
  searchInput,
  id,
}) => {
  const [focusedBook, setFocusedBook] = useState(false);

  // const bookId =
  //   result.industryIdentifiers[0].identifier ||
  //   result.industryIdentifiers[1].identifier;
  const selectBookHandler = () => {
    // setSelectedBook([
    //   { ...selectedBook, book: { ...result, result }, id: bookId && bookId },
    // ]);

    setSelectedBook([...selectedBook, result]);
    setFocusedBook(!focusedBook);
  };

  return (
    <>
      {/* necesito agregar un boton para cuando el usuario lo aprieta se me muestran 5 resultados mas, y asi sucesivamente, puedo poner id < x y esta x setearla para que cuando el usuario apriete se vaya sumando 5, (cada vez que el usario apriete more que la x sume 5) */}
      {searchInput !== "" && id < 8 && (
        <TableBodySearchResults
          onClick={selectBookHandler}
          $focusedBook={focusedBook}
        >
          <tr>
            <td>
              <img
                alt={result.title}
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
        </TableBodySearchResults>
      )}
    </>
  );
};

export default SearchResults;
