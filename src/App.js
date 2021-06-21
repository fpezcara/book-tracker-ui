import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookTrackerState from "./context/BookTrackerState";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AddBook from "./components/AddBook/AddBook";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <BookTrackerState>
        <Header />
        <Switch>
          <Route exact path="/:name/add-book" component={AddBook} />
          <Route exact path="/:name" component={Home} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </BookTrackerState>
    </Router>
  );
};

export default App;
// {
/* <Router>
<NavBar />
<BookTrackerState>
  <Switch>
    <Route exact path="/:name/" component={Home}>
      <Route exact path="add-book" component={AddBook} />
    </Route>
    <Route component={NotFound} />
  </Switch>
</BookTrackerState>
</Router> */
// }
