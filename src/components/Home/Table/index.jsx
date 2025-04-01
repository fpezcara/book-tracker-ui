import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ConfirmationModal from "../../ConfirmationModal";
import useModal from "../../../hooks/useModal";

import { TableContainer } from "../../../styles/Table.style";

const Table = ({ bookLists }) => {
  console.log("in table -- booklists", bookLists);
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
        message={isVisible && "delete"}
        book={bookToDelete}
        title={bookToDelete.title}
        authors={bookToDelete.authors}
        hideModal={toggleModal}
        isVisible={isVisible}
      />
    </>
  );
};

export default Table;
