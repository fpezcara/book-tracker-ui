import styled from "styled-components";

export const AddBookWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Lato", sans-serif;
  padding: 3em;
  .go-back {
    position: absolute;
    top: 1em;
    left: 1em;
    border-radius: 2em;
    background: #001e1d;
    /* font-size: 12px; */
  }
`;
