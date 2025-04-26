import React from "react";
import imageNotAvailable from "../../assets/image-not-available.svg";

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
      {searchInput !== "" && id < 10 && (
        <tr onClick={selectBookHandler} data-testid={`dropdown-element-${id}`}>
          <td>
            <img
              alt={result.title}
              src={result.cover_image ? result.cover_image : imageNotAvailable}
            />
          </td>
          <td>
            <span>{result.title}</span>
          </td>
        </tr>
      )}
    </>
  );
};

export default DropdownElement;
