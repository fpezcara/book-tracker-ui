import React, { useState } from "react";
import { BooksTableContainer } from "../../styles/BooksTable";
import BooksTableContent from "./BooksTableContent";
import ConfirmationModal from "../Modal/ConfirmationModal";

const BooksTable = ({ bookList, bookLists, setBookLists }) => {
  const [openModal, setOpenModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState({});

  return (
    <>
      <BooksTableContainer>
        <tbody>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th></th>
          </tr>
          <BooksTableContent
            bookList={bookList}
            bookLists={bookLists}
            setBookLists={setBookLists}
            setOpenModal={setOpenModal}
            setBookToDelete={setBookToDelete}
          />
        </tbody>
      </BooksTableContainer>
      {openModal && (
        <ConfirmationModal
          message={"delete"}
          book={bookToDelete}
          title={bookToDelete.title}
          authors={bookToDelete.authors}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default BooksTable;
