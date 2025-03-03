import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AddBook from "./components/AddBook/AddBook";
import NotFound from "./components/NotFound/NotFound";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";

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
