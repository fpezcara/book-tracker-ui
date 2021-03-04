import styled from "styled-components";

export const AddBookWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const AddBookContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Work Sans", sans-serif;
  padding: 3em;

  button {
    background-color: #2196f3;
    border: none;
    border-radius: 16px;
    color: white;
    padding: 4px 15px;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px; 
  }
`;
