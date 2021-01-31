import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BookLists from "./components/Book/BookLists";
import Home from "./components/Home/Home";
// import SearchBook from "./components/Search/SearchBook";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book-lists/:name" component={BookLists} />
      </Switch>
    </Router>
  );
};

export default App;
