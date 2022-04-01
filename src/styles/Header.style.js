import styled from "styled-components";

export const Nav = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2.5em 0 0.8em 0;

  h1 {
    font-family: "Lato", sans-serif;
    font-size: 5em;
    color: #121629;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-shadow: 0 2px 1px #f6ffff, -1px 3px 1px #f6ffff, -2px 5px 1px #fffffe;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 4em;
    padding: 0;
    h1 {
      font-size: 3em;
    }
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2em;
    }
  }
`;
