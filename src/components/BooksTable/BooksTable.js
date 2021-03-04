import React from "react";
import { BooksTableContainer } from "../../styles/BooksTable";
import BooksTableContent from "./BooksTableContent";

const BooksTable = ({ bookList }) => {
  return (
    <BooksTableContainer>
      <tbody>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th></th>
        </tr>
        <BooksTableContent bookList={bookList} />
      </tbody>
    </BooksTableContainer>
  );
};

export default BooksTable;
