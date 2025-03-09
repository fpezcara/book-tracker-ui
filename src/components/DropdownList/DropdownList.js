import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import DropdownElement from "./DropdownElement/DropdownElement";
import ConfirmationModal from "../Modal/ConfirmationModal";
import useModal from "../../hooks/useModal";
import { API_URL } from "../../constants";
import useSearchChannel from "../../hooks/useSearchChannel";

import { Table } from "../../styles/DropdownList.style";

const DropdownList = ({
  selectType,
  triggerSearch,
  setTriggerSearch,
  searchInput,
}) => {
  const [addedBook, setAddedBook] = useState([]);
  const { isVisible, toggleModal } = useModal();

  const { items } = useFetch(
    `${API_URL}/books/search`,
    selectType,
    searchInput,
  );

  console.log("ITEMS: ", useSearchChannel(searchInput, selectType));

  return (
    <>
      <Table>
        {triggerSearch &&
          items &&
          items.map((result, i) => (
            <DropdownElement
              result={result.volumeInfo}
              searchInput={searchInput}
              showModal={toggleModal}
              setTriggerSearch={setTriggerSearch}
              setAddedBook={setAddedBook}
              key={i}
              id={i}
            />
          ))}
      </Table>
      {addedBook.map((book, i) => (
        <ConfirmationModal
          key={i}
          message={"add"}
          book={book}
          title={book.title}
          authors={book.authors}
          hideModal={toggleModal}
          isVisible={isVisible}
        />
      ))}
    </>
  );
};

export default DropdownList;
