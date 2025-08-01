import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ConfirmationModal from "../../ConfirmationModal";
import useModal from "../../../hooks/useModal";

import { TableContainer } from "../../../styles/Table.style";

const Table = ({ bookLists }) => {
  const { isVisible, toggleModal } = useModal();

  const [bookToDelete, setBookToDelete] = useState([]);

  return (
    <>
      <TableContainer>
        <TableHeader />
        <TableBody
          showModal={toggleModal}
          setBookToDelete={setBookToDelete}
          bookLists={bookLists}
        />
      </TableContainer>
      <ConfirmationModal
        message="delete"
        book={bookToDelete}
        hideModal={toggleModal}
        isVisible={isVisible}
      />
    </>
  );
};

export default Table;
