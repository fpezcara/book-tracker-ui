import React from "react";
import imageNotAvailable from "../../../assets/image-not-available.svg";

const DropdownElement = ({
  result,
  searchInput,
  showModal,
  setTriggerSearch,
  setAddedBook,
  id,
}) => {
  const selectBookHandler = () => {
    setTriggerSearch(false);
    showModal();
    setAddedBook([result]);
  };


  return (
    <>
      {searchInput !== "" && id < 8 && (
        <tbody onClick={selectBookHandler}>
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
        </tbody>
      )}
    </>
  );
};

export default DropdownElement;
