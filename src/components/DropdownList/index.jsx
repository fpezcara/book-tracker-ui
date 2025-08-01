import React, { useState } from "react";
import DropdownElement from "./DropdownElement";
import ConfirmationModal from "../ConfirmationModal";
import useModal from "../../hooks/useModal";
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

  const items = useSearchChannel(searchInput, selectType);

  return (
    <>
      <Table>
        {triggerSearch && items && items.length > 0 && (
          <tbody>
            {items.map((result, i) => (
              <DropdownElement
                result={result}
                searchInput={searchInput}
                showModal={toggleModal}
                setTriggerSearch={setTriggerSearch}
                setAddedBook={setAddedBook}
                key={i}
                id={i}
              />
            ))}
          </tbody>
        )}
      </Table>
      {addedBook.map((book, i) => (
        <ConfirmationModal
          key={i}
          message="add"
          book={book}
          hideModal={toggleModal}
          isVisible={isVisible}
        />
      ))}
    </>
  );
};

export default DropdownList;
