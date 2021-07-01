import styled from "styled-components";
import { DeleteOutline } from "@styled-icons/material-rounded/DeleteOutline";

export const TableContainer = styled.table`
  margin: 6em 2em;
  position: absolute;
  left: 23em;
  width: 60em;
  font-size: 14px;
  text-align: center;
  border-collapse: collapse;

  th {
    background-color: #e3f2fd;
    border-radius: 0.1em;
    padding: 0.6em;
  }
  td {
    padding: 1.5em;
    word-wrap: break-word;
    white-space: normal;
  }
  img {
    width: 4em;
  }
`;

export const DeleteIcon = styled(DeleteOutline)`
  width: 2em;
`;
