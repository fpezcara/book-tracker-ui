import React from "react";
import { Link } from "react-router-dom";
import img404 from "../../assets/not-found.jpg";

import { Container, Header } from "../../styles/NotFound.style.js";

const NotFound = () => {
  console.log("hola");
  return (
    <Container>
      <Header>
        <h4>Page not Found</h4>
        <Link to="/reading">Go Home</Link>
      </Header>
      <img src={img404} />
    </Container>
  );
};

export default NotFound;
