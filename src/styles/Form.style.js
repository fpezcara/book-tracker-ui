import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  input {
    font-size: 14px;
    border-radius: 0.5em;
    width: 25em;
    height: 2em;
    padding: 5px;
    margin-right: 20px;
    border: none;
    cursor: pointer;
    background: #fffffe;
  }
  input:focus {
    outline: none;
  }
  select {
    font-size: 14px;
    border-radius: 0.5em;
    padding: 5px;
    margin-left: 20px;
    border: none;
    height: 2.7em;
    text-transform: capitalize;
    cursor: pointer;
    background: #fffffe;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
    flex-direction: column-reverse;
    align-items: start;
    justify-content: space-between;
    height: 6em;
  }
`;
