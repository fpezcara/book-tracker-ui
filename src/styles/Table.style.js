import styled from "styled-components";
import { DeleteOutline } from "@styled-icons/material-rounded/DeleteOutline";

export const TableContainer = styled.table`
  background: #fffffe;
  margin-top: 4em;
  width: 60em;
  font-size: 14px;
  text-align: center;
  border-radius: 1em;
  border-spacing: 0;
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  th {
    background-color: #232946;
    color: #fffffe;
    padding: 0.6em;
  }

  th:first-child {
    border-radius: 6px 0 0 0;
  }
  th:last-child {
    border-radius: 0 6px 0 0;
  }
  td {
    padding: 1.5em;
    word-wrap: break-word;
    white-space: normal;
  }

  td:first-child,
  th:first-child {
    border-left: medium none;
  }

  img {
    width: 4em;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const DeleteIcon = styled(DeleteOutline)`
  width: 2em;
  cursor: pointer;
`;
