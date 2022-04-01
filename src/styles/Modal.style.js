import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 2em;

  div {
    font-size: 14px;
    height: auto;
    padding: 0.5em;
    border-radius: 2em;
    background: #f6ffff;
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
  font-family: "Lato", sans-serif;
  .button {
    width: 10em;
    font-weight: 400;
    font-size: 12px;
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
