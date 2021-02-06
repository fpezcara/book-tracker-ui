import styled from "styled-components";

export const TableSearchBook = styled.table`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
`;

export const TableBodySearchResults = styled.tbody`
  display: flex;
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  padding: 0;
  margin: 0;
  border: ${(props) =>
    props.$focusedBook ? "0.1px ridge #2196F3" : "1px solid grey"};
  background-color: ${(props) => props.$focusedBook && "#E1F5FE"};
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
`;
