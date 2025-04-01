import React from "react";
import { Link } from "react-router";
import img404 from "../../assets/not-found.jpg";

import { Container, Header } from "../../styles/NotFound.style.js";
// todo: redirect to right booklist
const NotFound = () => (
  <Container>
    <Header>
      <Link to="/reading">Go Home</Link>
    </Header>
    <img src={img404} alt="page not found" />
  </Container>
);

export default NotFound;
