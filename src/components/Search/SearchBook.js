import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const apiKey = process.env.REACT_APP_API_KEY;
const urlTitle = process.env.REACT_APP_TITLE_URL;

const SearchBook = ({ selectType, searchInput }) => {
  console.log("searchbook:", selectType);
  console.log("searchbook:", searchInput);
  const [searchResult, setSearchResult] = useState([]);
  switch (selectType) {
    case "author":
      console.log("estoy en author");

      // `${urlTitle}intitle:${searchInput.term}&orderBy=relevance&key=${apiKey}`

      break;
    case "isbn":
      console.log("estoy en isbn");
      break;
    default:
      console.log("estoy en title");

      break;
  }
  //   case "isbn":
  //     console.log("buscare en isbn");
  //     break;
  //   default:
  //     console.log("buscare en title");
  //     break;
  // }
  // }

  // console.log(searchInput)
  // const searchByTitle = useFetch(
  //   `${urlTitle}intitle:${searchInput.term}&orderBy=relevance&key=${apiKey}`
  // );

  // const searchByAutor = useFetch(
  //   `${urlTitle}inauthor:${searchInput.term}&orderBy=relevance&key=${apiKey}`
  // );

  // const searchByISBN = useFetch(
  //   `${urlTitle}isbn:${searchInput.term}&orderBy=relevance&key=${apiKey}`
  // );

  // console.log(searchByAutor);

  //   );
  return <div>Estoy en Search</div>;
};

export default SearchBook;
