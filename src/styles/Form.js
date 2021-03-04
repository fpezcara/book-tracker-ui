import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  align-items: center;

  input {
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    border-radius: 2px;
    width: 25em;
    height: 2em;
    padding: 0.3em;
    margin-right: 20px;
    border: 0.2px solid;
    border-color: #8c9eff;
    text-align: left;
  }
  input:focus {
    outline: none;
  }
  select {
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    border-radius: 2px;
    padding: 5px;
    margin-left: 20px;
    border: 0.2px solid;
    height: 2.7em;
    border-color: #8c9eff;
  }
`;
