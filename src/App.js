import React, { useState } from "react";
import Form from "./components/Form";


const App = () => {
  const [searchedTerm, setSearchedTerm] = useState("");

  return (
    <div className="App">
      <div className="searchedBook">
        <Form searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} />
      </div>
    </div>
  );
};

export default App;
