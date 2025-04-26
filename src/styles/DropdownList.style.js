import styled from "styled-components";

export const Table = styled.table`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border-radius: 3em;

  tbody {
    font-size: 12px;
    padding: 0;
    margin: 0;
    border: none;
    background-color: #fffffe;
    width: 29.9em;
    overflowy: auto;

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
      cursor: pointer;
    }

    td:last-child {
      border-radius: 3em;
    }

    img {
      align-self: flex-end;
      width: 3.3em;
      height: auto;
    }
  }
`;
