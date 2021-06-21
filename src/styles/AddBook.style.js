import styled from "styled-components";

export const AddBookWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddBookContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Work Sans", sans-serif;
  padding: 3em;

  button {
    background-color: #2196f3;
    border-radius: 16px;
    color: white;
    padding: 0.6em;
    border: 0.2em solid #fff;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;
