import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  h3 {
    font-size: 3em;
    padding: 0;
    margin: 0;
  }
  h4 {
    font-size: 2em;
    margin: 0;
  }
  img {
  }
`;

export const Header = styled.header`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
`;
