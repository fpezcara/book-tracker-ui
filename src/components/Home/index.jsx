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

  const { isPending, lists } = useContext(BookTrackerContext);
  // console.log("is it loading", isPending);
  // console.log("is it lists", lists);
  const isValidBookListUrl =
    lists &&
    lists?.some((item) => item.name.toLowerCase() === name?.toLowerCase());

  const isValidBookListCookie =
    lists &&
    lists?.some(
      (item) => item.name.toLowerCase() === currentBookList?.toLowerCase(),
    );

  useEffect(() => {
    console.log(userId);
    if (!userId) {
      navigate("/login");
    } else {
      navigate(`/${currentBookList}`);
    }
  }, [userId, navigate, currentBookList, lists]);

  return (
    <HomeContainer data-testid="home-container">
      {isPending ? (
        <LoadingSpinner />
      ) : !isValidBookListUrl || !isValidBookListCookie ? (
        <Navigate to="/not-found" />
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
