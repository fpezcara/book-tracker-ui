import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import DropdownElement from "./DropdownElement/DropdownElement";
import ConfirmationModal from "../Modal/ConfirmationModal";
import useModal from "../../hooks/useModal";

import { Table } from "../../styles/DropdownList.style";

const apiKey = process.env.REACT_APP_API_KEY;
const urlName = process.env.REACT_APP_TITLE_URL;

const DropdownList = ({
  selectType,
  triggerSearch,
  setTriggerSearch,
  searchInput,
}) => {
  const [typeSelected, setTypeSelected] = useState("");
  const [addedBook, setAddedBook] = useState([]);

  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    switch (selectType) {
      case "author":
        setTypeSelected("inauthor");
        break;
      case "isbn":
        setTypeSelected("isbn");
        break;
      default:
        setTypeSelected("intitle");
    }
  }, [selectType]);

  const { items } = useFetch(
    `${urlName}${typeSelected}:${searchInput}&orderBy=relevance&key=${apiKey}`
  );
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
