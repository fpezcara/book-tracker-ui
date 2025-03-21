import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookTrackerState from "./context/BookTrackerState";
import routesConfig from "./routesConfig";

const App = () => {
  const router = createBrowserRouter(routesConfig);

  return (
    <BookTrackerState>
      <RouterProvider router={router} />
    </BookTrackerState>
  );
};

export default App;
