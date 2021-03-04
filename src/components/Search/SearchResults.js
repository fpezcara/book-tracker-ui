import React, { useState } from "react";
import imageNotAvailable from "../../assets/image-not-available.svg";
import { TableBodySearchResults } from "../../styles/Search";

// este nombre lo podria cambiar a dropdown list
// tal vez poner el modal de confirmacion aca al seleccionar el libro que me diga "do u wish to add this book" o algo asi
const SearchResults = ({
  result,
  selectedBook,
  setSelectedBook,
  searchInput,
  setOpenModal,
  setTriggerSearch,
  id,
}) => {
  const [focusedBook, setFocusedBook] = useState(false);

  const selectBookHandler = () => {
    setSelectedBook([...selectedBook, result]);
    setFocusedBook(!focusedBook);
    setTriggerSearch(false);
    setOpenModal(true);
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
