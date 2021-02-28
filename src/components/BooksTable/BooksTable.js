import React from "react";
import { BookTrackerContext } from "../Context/BookTrackerContext";
import { BooksTableContainer } from "../../styles/BooksTable";

import BooksTableContent from "./BooksTableContent";

const BooksTable = ({bookList}) => {

  console.log(bookList)
  return (
    <BooksTableContainer>
      <tbody>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
        </tr>
        <BooksTableContent bookList={bookList} />
      </tbody>
    </BooksTableContainer>
  );
};

export default BooksTable;
