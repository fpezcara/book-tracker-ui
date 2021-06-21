import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const apiKey = process.env.REACT_APP_API_KEY;
const urlName = process.env.REACT_APP_TITLE_URL;

const FetchBook = ({ selectType, searchInput }) => {
  console.log("fetchbook", selectType);

  const [typeSelected, setTypeSelected] = useState("");

  useEffect(() => {
    switch (selectType) {
      case "author":
        setTypeSelected("inauthor");
        break;
      case "isbn":
        setTypeSelected("isbn");
        break;
      default:
        setTypeSelected("intitle");
    }
  }, [selectType]);

  const searchResults = useFetch(
    `${urlName}${typeSelected}:${searchInput}&orderBy=relevance&key=${apiKey}`
  );

  return searchResults;
};

export default FetchBook;
