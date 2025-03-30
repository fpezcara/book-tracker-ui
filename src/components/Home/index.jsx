import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router";

import HomeHeader from "./Header/index.jsx";
import Table from "./Table/index.jsx";
import BookTrackerContext from "../../context/book-tracker-context.js";
import LoadingSpinner from "../LoadingSpinner";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

import { HomeContainer } from "../../styles/Home.style.js";

const Home = () => {
  const currentBookList = Cookies.get("currentBookList");
  const userId = Cookies.get("userId");
  const navigate = useNavigate();

  const { loading, lists } = useContext(BookTrackerContext);

  const linkMatches = lists.some(
    (item) => item.name.toLowerCase() === currentBookList,
  );

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  return (
    <HomeContainer data-testid="home-container">
      {loading ? (
        <LoadingSpinner />
      ) : linkMatches ? (
        <>
          <HomeHeader />
          <Table bookLists={lists} />
        </>
      ) : (
        <Navigate to="/404" />
      )}
    </HomeContainer>
  );
};

export default Home;
