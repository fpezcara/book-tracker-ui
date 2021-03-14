import React, { useContext, useState } from "react";
import { BookTrackerContext } from "../Context/BookTrackerContext";
import { useParams } from "react-router-dom";
import BooksTable from "../BooksTable/BooksTable";
import HomeNav from "./HomeNav";
import { HomeContainer, BookListContainer } from "../../styles/Home.js";

const Home = () => {
  const { name } = useParams();
  const [bookLists, setBookLists] = useContext(BookTrackerContext);

  return (
    <HomeContainer>
      {bookLists &&
        bookLists
          .filter((bookList) => bookList.listUrl.includes(name))
          .map((bookList) => (
            <>
              <HomeNav name={name} />
              <BookListContainer>
                <BooksTable
                  bookList={bookList}
                  bookLists={bookLists}
                  setBookLists={setBookLists}
                />
              </BookListContainer>
            </>
          ))}
    </HomeContainer>
  );
};

export default Home;
