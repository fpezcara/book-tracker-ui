import React, { useState } from "react";
import Form from "../Form/Form";

const Home = () => {
  const [searchInput, setSearchInput] = useState({
    term: "",
    triggerSearch: false,
  });
  return (
    <>
      <div className="searchedBook">
        <Form searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </>
  );
};

export default Home;
