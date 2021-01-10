import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const apiKey = process.env.REACT_APP_API_KEY;
const urlTitle = process.env.REACT_APP_TITLE_URL
console.log(urlTitle);

const SearchBook = ({searchedTitle}) => {
  const info = useFetch(
    `${urlTitle}${searchedTitle}&download=epub&key=${apiKey}`
  );

  console.log(info)
  return <div>hola</div>
};

export default SearchBook;
