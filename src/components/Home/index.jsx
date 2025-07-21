import React, { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router";

import HomeHeader from "./Header/index.jsx";
import Table from "./Table/index.jsx";
import BookTrackerContext from "../../context/BookTrackerContext.js";
import LoadingSpinner from "../LoadingSpinner";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

import { HomeContainer } from "../../styles/Home.style.js";

const Home = () => {
  const { name } = useParams();
  const currentBookList = Cookies.get("currentBookList");
  const userId = Cookies.get("userId");
  const navigate = useNavigate();

  const { loading, lists } = useContext(BookTrackerContext);

  const isValidBookListUrl = lists.some(
    (item) => item.name.toLowerCase() === name?.toLowerCase(),
  );

  const isValidBookListCookie = lists.some(
    (item) => item.name.toLowerCase() === currentBookList?.toLowerCase(),
  );

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    } else {
      navigate(`/${currentBookList}`);
    }
  }, [userId, navigate, currentBookList]);

  return (
    <HomeContainer data-testid="home-container">
      {loading ? (
        <LoadingSpinner />
      ) : !isValidBookListUrl || !isValidBookListCookie ? (
        <Navigate to="/404" />
      ) : (
        <>
          <HomeHeader bookLists={lists} currentBookList={currentBookList} />
          <Table bookLists={lists} />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
