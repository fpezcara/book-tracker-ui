import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../styles/Header.style";

const Header = () => (
  <Nav>
    <div className="authentication">
      <Link className="link home" to="/">
        Home
      </Link>
      <div className="authLinks">
        <Link className="link" to="/register">
          Register
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    </div>
    <div>
      <h1>Book Tracker</h1>
    </div>
  </Nav>
);

export default Header;
