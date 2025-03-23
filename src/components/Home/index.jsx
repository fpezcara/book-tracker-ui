import React, { useContext } from "react";
import { useParams, Navigate } from "react-router";

import HomeHeader from "./Header/index.jsx";
import Table from "./Table/index.jsx";
import BookTrackerContext from "../../context/book-tracker-context.js";
import LoadingSpinner from "../LoadingSpinner";

import { HomeContainer } from "../../styles/Home.style.js";

const Home = () => {
  const { name } = useParams();
  const {
    loading,
    state: { bookLists },
  } = useContext(BookTrackerContext);

  const linkMatches = bookLists.some((item) => item.listUrl === name);

  return (
    <HomeContainer data-testid="home-container">
      {loading ? (
        <LoadingSpinner />
      ) : linkMatches ? (
        <>
          <HomeHeader />
          <Table />
        </>
      ) : (
        <Navigate to="/404" />
      )}
    </HomeContainer>
  );
};

export default Home;
