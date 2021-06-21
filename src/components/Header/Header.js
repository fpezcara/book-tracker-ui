import React from "react";
import { Nav } from "../../styles/NavBar.style";
import { Link } from "react-router-dom";

const Header = () => {
  // fijarme cual es la mejor manera de agregar el goback button
  return (
    <Nav>
      {/* <Link to="/">Go back</Link> */}
      <h1>Book Tracker</h1>
    </Nav>
  );
};

export default Header;
