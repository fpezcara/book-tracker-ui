import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Work Sans", sans-serif;
  nav {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 2em;
    margin-bottom: 2em;
  }
  select {
    padding: 0.5em;
    border-radius: 0.5em;
  }
  select:focus {
    outline: none;
  }
  button {
    width: 6em;
  }
`;
export const BookListContainer = styled.article`
  display: flex;
  justify-content: center;
`;

// export const SearchContainer = styled.article`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   font-family: "Work Sans", sans-serif;
//   margin: 0;
//   padding: 0;
//   width: 500px;
//   height: auto;
// `;
