import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [selectedBook, setSelectedBook] = useState("");

  return (
    <div className="App">
      <div className="searchedBook">
        <Form selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
      </div>
    </div>
  );
};

export default App;
