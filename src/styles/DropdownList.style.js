import styled from "styled-components";

export const Table = styled.table`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  tbody {
    display: flex;
    font-family: "Work Sans", sans-serif;
    font-size: 12px;
    padding: 0;
    margin: 0;
    border: 1px solid grey;
    background-color: #eeeeee;
    border-radius: 0.2em;
    width: 29.8em;
    height: 5em;
    overflow: hidden;

    tr img {
      display: flex;
      justify-content: flex-end;
      align-self: flex-end;
      height: auto;
    }
    tr span {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    td {
      padding: 0;
      margin: 0;
      height: 5.3em;
    }

    img {
      align-self: flex-end;
      width: 3.3em;
      height: auto;
    }
  }
`;
