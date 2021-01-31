import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchBook from "./SearchBook";

const Form = ({ searchedBook, setSearchedBook }) => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const searchBookHandler = (e) => {
    setSearchedTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedBook(searchedTerm);
    // que la misma variable en la que guardo la palabra buscada, contenga un booleano que me cambie a true, y cuando esté en true que se me dispare el fetch
  };

  console.log(searchedBook);
  console.log(searchedTerm);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={searchBookHandler}
          value={searchedTerm}
          placeholder="Search by Title, Author or ISBN"
        />
        <AddCircleIcon onClick={() => console.log("fui clickeado")} />
        {/* <select onChange={statusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="reading">Reading</option>
      </select> 
      esto ponerlo cuando pueda acceder a ver todos los libros agregados
      fijarme como es la API asi se como manipular esa data
      */}
      </form>
    </>
  );
};

export default Form;
