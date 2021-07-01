import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 15px;
  height: 100%;
  margin: 2em;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  height: 2em;
  margin-bottom: 2em;

  section {
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
  }
`;

export const NavRightSide = styled.section`
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
