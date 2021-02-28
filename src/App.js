import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BookTrackerProvider } from "./components/Context/BookTrackerContext";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AddBook from "./components/AddBook/AddBook";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <BookTrackerProvider>
        <NavBar />

        <Switch>
          <Route exact path="/book-lists/:name" component={Home} />
          <Route exact path="/book-lists/:name/add-book" component={AddBook} />
          <Route component={NotFound} />
        </Switch>
      </BookTrackerProvider>
    </Router>
  );
};

export default App;
