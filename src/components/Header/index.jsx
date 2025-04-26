import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Cookies from "js-cookie";

import { Nav } from "../../styles/Header.style";

const Header = () => {
  const navigate = useNavigate();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const userId = Cookies.get("userId");
  const currentBookList = Cookies.get("currentBookList");

  useEffect(() => {
    setIsUserLoggedIn(!!userId);
  }, [userId]);

  return (
    <Nav>
      <div className="authentication">
        <Link
          className="link home"
          onClick={() => navigate(-1)}
          to={`/${currentBookList}`}
        >
          Home
        </Link>
        <div className="authLinks">
          {isUserLoggedIn ? (
            <Link className="link" to="/logout">
              Logout
            </Link>
          ) : (
            <>
              <Link className="link" to="/register">
                Register
              </Link>
              <Link className="link" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      <div>
        <h1>Book Tracker</h1>
      </div>
    </Nav>
  );
};

export default Header;
