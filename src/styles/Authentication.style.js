import styled from "styled-components";

export const AuthenticationContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-2210775-jpeg.jpg")
    center center no-repeat !important;
  background-size: cover;
  .wrapper {
    margin: 2em;
    background: #f8f4e5;
    padding: 50px 100px;
    border: 2px solid black;
    box-shadow:
      15px 15px 1px #ffa580,
      15px 15px 1px 2px black;
    max-width: 26rem;
  }

  .loginbackground {
    margin: 0px auto;
    width: 100%;
    max-width: 448px;
    background: white;
    border-radius: 4px;
    box-shadow:
      rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
      rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
  }

  body {
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-2210775-jpeg.jpg")
      center center no-repeat !important;
    background-size: cover;
  }

  input {
    display: block;
    width: 100%;
    font-size: 14pt;
    line-height: 28pt;
    font-family: "Fjalla One";
    margin-bottom: 28pt;
    border: none;
    border-bottom: 5px solid black;
    background: #f8f4e5;
    min-width: 250px;
    padding-left: 5px;
    outline: none;
    color: black;
  }

  input:focus {
    border-bottom: 5px solid #ffa580;
  }

  button {
    display: block;
    margin: 1.5rem auto;
    line-height: 28pt;
    padding: 0 20px;
    background: #ffa580;
    letter-spacing: 2px;
    transition: 0.2s all ease-in-out;
    outline: none;
    border: 1px solid black;
    box-shadow:
      3px 3px 1px 1px #95a4ff,
      3px 3px 1px 2px black;
    cursor: pointer;
  }
  button:hover {
    background: black;
    color: white;
    border: 1px solid black;
  }

  ::selection {
    background: #ffc8ff;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border-bottom: 5px solid #95a4ff;
    -webkit-text-fill-color: #2a293e;
    -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 18rem;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  word-break: break-all;
`;

export const SuccessMessage = styled.span`
  color: green;
  font-size: 12px;
  word-break: break-all;
`;

export const SmallText = styled.p`
  font-size: 12px;
  margin-top: 0.5rem;
`;
