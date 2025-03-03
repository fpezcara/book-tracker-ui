import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2em;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  h3 {
    font-size: 22px;
    text-transform: capitalize;
    color: #121629;
    margin: 0;
  }
  select {
    cursor: pointer;
    padding: 0.5em 2em 0.5em 1em;
    margin: 0;
    border-radius: 0.5em;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
    box-shadow: 0 1px 3px -2px #9098a9;
    transition: all 150ms ease;
    border: 1px solid #e2eded;
    line-height: 1;
    background: #fffffe;
  }
  select:focus {
    outline: none;
  }
  option {
    border: 1px solid #e2eded;
    border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
    padding: 2em;
    margin-bottom: 1px;
    cursor: pointer;
    border-width: 0;
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 17px;
    }
    select {
      font-size: 13px;
    }
  }
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: end;
  height: 5em;
  font-family: "Lato", sans-serif;
  .add-book {
    background-color: #eebbc3;
    border-radius: 0.5em;
    padding: 1em;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    border: none;
    padding: 0.5em;
    width: 6.5em;
    color: #121629;
  }
`;
