import styled from "styled-components";

export const TableSearchBook = styled.table`
  padding: 0;
  margin: 0;
`;

export const SearchResult = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  tbody {
    display: flex;
    font-family: "Work Sans", sans-serif;
    font-size: 12px;
    padding: 0;
    margin: 0;
    border: 1px solid grey;
    border-radius: 0.1em;
    width: 29.7em;
    height: 5em;
  }
  tr img {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  tr span {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  img {
    width: 3em;
    height: auto;
  }
`;
