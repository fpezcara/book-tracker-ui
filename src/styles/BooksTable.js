import styled from "styled-components";
import { DeleteOutline } from "@styled-icons/material-rounded/DeleteOutline";

export const BooksTableContainer = styled.table`
  margin: 2em;
  position: absolute;
  left: 20em;
  width: 60em;
  font-size: 14px;
  text-align: center;
  tbody {
  }
  tr {
    /* margin-right: 0.2em; */
  }
  th {
    /* width: 6em; */
    margin-right: 0.2em;
  }
  td {
    word-wrap: break-word;
  }
  img {
    width: 4em;
  }
`;

export const DeleteIcon = styled(DeleteOutline)`
  width: 2em;
`;
