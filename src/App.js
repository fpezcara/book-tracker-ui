import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
        <Routes>
          <Route path="/404" element={<NotFound />} />
          <Route path="/:name" element={<Home />} />
          <Route path="/:name/add-book" element={<AddBook />} />
          <Route path="/" element={<Navigate to="/reading" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BookTrackerState>
    </Router>
  );
};

export default App;
