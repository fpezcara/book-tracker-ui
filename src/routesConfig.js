import Home from "./components/Home";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ResetPassword from "./components/ResetPassword";

import { Outlet, Navigate } from "react-router";

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
      { path: "logout", element: <Logout /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routesConfig;
