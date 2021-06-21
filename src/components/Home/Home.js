import React, { useState } from "react";
import HomeHeader from "./Header/HomeHeader";
import Table from "./Table/Table";

import { HomeContainer } from "../../styles/Home.style.js";

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <Table />
    </HomeContainer>
  );
};

export default Home;
