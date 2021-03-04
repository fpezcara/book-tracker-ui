import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 15px;
  height: 100%;
  margin: 2em;
  header {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 2em;
    margin-bottom: 2em;
  }
`;

export const BookListContainer = styled.article`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const NavLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 18px;
  }
  select {
    padding: 0.4em;
    margin: 0;
    width: 6.5em;
    border-radius: 0.5em;
    font-weight: 400;
    font-size: 12px;
  }
  select:focus {
    outline: none;
  }
`;

export const NavRightSide = styled.div`
  display: flex;
  align-items: center;
  button {
    cursor: pointer;
    font-weight: 400;
    font-size: 13px;
    padding: 0.5em;
    width: 6em;
    border-radius: 0.2em;
    color: #fff;
    background-color: #5cb85c;
    border: 1px solid transparent;
    border-color: #4cae4c;
  }
`;
