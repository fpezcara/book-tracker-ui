import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchBook from "./SearchBook";

const Form = ({ searchedTerm, setSearchedTerm }) => {
  const addBookHandler = (e) => {
    setSearchedTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedTerm("");
// que la misma variable en la que guardo la palabra buscada, contenga un booleano que me cambie a true, y cuando esté en true que se me dispare el fetch

};

  const statusHandler = (e) => {
    console.log(e);
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={addBookHandler}
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
    <SearchBook searchedTerm={searchedTerm} />
    </>
  );
};

export default Form;
