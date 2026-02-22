import Home from "./components/Home";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ResetPassword from "./components/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";

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
      { path: "/not-found", element: <NotFound /> },
      {
        path: "/:name",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/:name/add-book",
        element: (
          <ProtectedRoute>
            <AddBook />
          </ProtectedRoute>
        ),
      },
      { path: "/register", element: <Registration /> },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Logout /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "*", element: <Navigate to="/not-found" replace /> },
    ],
  },
];

export default routesConfig;
