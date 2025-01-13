import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AddBook from "./components/AddBook/AddBook";
import NotFound from "./components/NotFound/NotFound";
import { Outlet, Navigate } from "react-router-dom";

const routesConfig = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Navigate to="/reading" /> },
      { path: "/404", element: <NotFound /> },
      { path: "/:name", element: <Home /> },
      { path: "/:name/add-book", element: <AddBook /> },
    ],
  },
];

export default routesConfig;
