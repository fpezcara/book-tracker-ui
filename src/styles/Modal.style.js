import styled from "styled-components";

export const ModalContainer = styled.article`
  display: flex;
  font-family: "Work Sans", sans-serif;
  background-color: red;
  article {
    font-size: 14px;
    width: 30em;
    height: auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 20px;
    position: absolute;
    top: 15em;
    left: 38em;
    z-index: 1000;
    background-color: #fff;
  }
`;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30em;
  margin-top: 2em;

  span {
    display: flex;
    padding: 0.2em;
  }
  .message {
    font-size: 15px;
  }
  .title {
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
  }
  .author {
    font-size: 13px;
    font-style: italic;
    font-weight: 400;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25em;
  margin: 2em;

  .button {
    width: 10em;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 12px;
    padding: 0.5em;
    border: 0.2em solid #fff;
    color: #ffffff;
  }

  .accept {
    background-color: #28a745;
    position: relative;
    bottom: 2px;
  }

  .cancel {
    background-color: #dc3545;
    position: relative;
    bottom: 2px;
  }
`;
