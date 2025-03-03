import styled from "styled-components";

export const Nav = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem 0.5em 0;
  flex-direction: column;

  h1 {
    font-family: "Lato", sans-serif;
    font-size: 5em;
    color: #121629;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-shadow:
      0 2px 1px #f6ffff,
      -1px 3px 1px #f6ffff,
      -2px 5px 1px #fffffe;
    text-align: center;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .authentication {
    gap: 2rem;
    justify-content: flex-end;
=  }

  .link {
    appearance: none;
    background-color: transparent;
    border: 2px solid #1a1a1a;
    border-radius: 15px;
    box-sizing: border-box;
    color: #3b3b3b;
    cursor: pointer;
    display: inline-block;
    font-family:
      Roobert,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 40px;
    min-width: 0;
    outline: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 8rem;
    will-change: transform;
  }

  .link:disabled {
    pointer-events: none;
  }

  .link:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .link:active {
    box-shadow: none;
    transform: translateY(0);
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 4em;
    padding: 0;
    h1 {
      font-size: 3em;
    }
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2em;
    }
  }
`;
