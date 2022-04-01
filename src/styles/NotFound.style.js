import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
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
