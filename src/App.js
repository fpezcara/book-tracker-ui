import React, { useState } from "react";
import Form from "./components/Form";
import SearchBook from "./components/SearchBook";

const App = () => {
  const [searchedBook, setSearchedBook] = useState("");

  return (
    <div className="App">
      <div className="searchedBook">
        <Form searchedBook={searchedBook} setSearchedBook={setSearchedBook} />
        <SearchBook searchedBook={searchedBook} />
      </div>
    </div>
  );
};

export default App;
