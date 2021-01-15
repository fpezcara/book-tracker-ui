import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home/Home";
// import SearchBook from "./components/Search/SearchBook";

const App = () => {
  return (
    <Router>
      <nav>
        <h1>Book Tracker</h1>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route
          exact
          path="/search/:type"
          component={() => <SearchBook searchInput={searchInput} />}
        /> */}
      </Switch>
    </Router>
  );
};

export default App;
