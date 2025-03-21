import Home from "./components/Home";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";
import Registration from "./components/Registration";
import Login from "./components/Login";

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
      { path: "/register", element: <Registration /> },
      { path: "/login", element: <Login /> },
    ],
  },
];

export default routesConfig;
