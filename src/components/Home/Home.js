import React, { useContext } from "react";
import { useParams, Redirect } from "react-router-dom";

import HomeHeader from "./Header/HomeHeader";
import Table from "./Table/Table";
import BookTrackerContext from "../../context/book-tracker-context";

import { HomeContainer } from "../../styles/Home.style.js";

const Home = () => {
  const { name } = useParams();
  const { state } = useContext(BookTrackerContext);
  const { bookLists } = state;

  const linkMatches = bookLists.some((item) => item.listUrl === name);
  return (
    <HomeContainer>
      {linkMatches ? (
        <>
          <HomeHeader />
          <Table />
        </>
      ) : (
        <Redirect to="/404" />
      )}
    </HomeContainer>
  );
};

export default Home;
