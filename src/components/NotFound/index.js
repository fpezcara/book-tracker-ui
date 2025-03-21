import React from "react";
import { Link } from "react-router-dom";
import img404 from "../../assets/not-found.jpg";

import { Container, Header } from "../../styles/NotFound.style.js";

const NotFound = () => {
  return (
    <Container>
      <Header>
        <Link to="/reading">Go Home</Link>
      </Header>
      <img src={img404} alt="page not found" />
    </Container>
  );
};

export default NotFound;
