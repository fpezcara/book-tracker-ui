import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import BookTrackerProvider from "./context/BookTrackerProvider";
import routes from "./routesConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <BookTrackerProvider>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </BookTrackerProvider>
    </QueryClientProvider>
  );
};

export default App;
