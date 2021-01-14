import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";



const apiKey = process.env.REACT_APP_API_KEY;
const urlTitle = process.env.REACT_APP_TITLE_URL;

const SearchBook = ({ searchInput }) => {
 
  console.log(searchInput)
  const searchByTitle = useFetch(
    `${urlTitle}intitle:${searchInput.term}&orderBy=relevance&key=${apiKey}`
  );

  const searchByAutor = useFetch(
    `${urlTitle}inauthor:${searchInput.term}&orderBy=relevance&key=${apiKey}`
  );

  const searchByISBN = useFetch(
    `${urlTitle}isbn:${searchInput.term}&orderBy=relevance&key=${apiKey}`
  );

  console.log(searchByAutor);

  //   );
  return <div>Hola</div>;
};

export default SearchBook;
