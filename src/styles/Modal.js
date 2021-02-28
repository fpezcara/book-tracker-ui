import styled from "styled-components";

export const ModalContainer = styled.article`
  display: flex;
  font-family: "Work Sans", sans-serif;
  background-color: blue;
  z-index: 1000;
  article {
    font-size: 14px;
    width: 30em;
    height: auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 20px;
    position: absolute;
    top: 22%;
    right: 35.5%;
    background-color: #fff;
    margin-bottom: 200px;
  }
  /* } */
`;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30em;
  margin-top: 2em;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.5s; // super slow to see fade works
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.5s; // super slow to see fade works
  }

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
  justify-content: center;
  align-items:center;
  width: 30em;
  margin-top: 2em;

  .button {
    width: 6em;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 12px;
    padding: 0.5em;
    border: 0.2em solid #fff;
    color: #ffffff;

    /* border-color: white; */
  }

  .add {
    background-color: #28a745;
    }

  .cancel {
    background-color: #dc3545;
=  }
`;
