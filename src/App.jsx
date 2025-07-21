import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import BookTrackerState from "./context/BookTrackerProvider";
import routes from "./routesConfig";

const App = () => {
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  });

  return (
    <BookTrackerState>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </BookTrackerState>
  );
};

export default App;
