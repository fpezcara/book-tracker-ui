import React from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchBook from "./SearchBook";


const Form = ({ selectedBook, setSelectedBook }) => {
  const addBookHandler = (e) => {
    setSelectedBook(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedBook)
    // console.log()
  };

  const statusHandler = (e) => {
    console.log(e)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={addBookHandler} value={selectedBook} />
      <AddCircleIcon onClick={() => console.log("fui clickeado")}/>
      {/* <select onChange={statusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="reading">Reading</option>
      </select> 
      esto ponerlo cuando pueda acceder a ver todos los libros agregados
      fijarme como es la API asi se como manipular esa data
      */}
      <SearchBook searchedTitle={"Las cosas que perdimos en el fuego"}/>
    </form>
  );
};

export default Form;
