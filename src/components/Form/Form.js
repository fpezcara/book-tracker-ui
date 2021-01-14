import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchBook from "../Search/SearchBook";
import { useHistory, useParams } from "react-router-dom";

const Form = ({ searchInput, setSearchInput }) => {
  const history = useHistory();
  console.log(history);
  const [searchedTerm, setSearchedTerm] = useState("");
  const addBookHandler = (e) => {
    setSearchedTerm(e.target.value);
  };
  const params = useParams();

  console.log(params);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput({ term: searchedTerm, triggerSearch: true });
    history.push("/hola");
  };

  const statusHandler = (e) => {
    switch (e.target.value) {
      case "author":
        console.log("buscare en author");
        // aca tengo que poner que el search se haga en autor, tal vez guardar esto en un estado, asi despues puedo usarlo en submit cuando el usuario aprieta submit
        break;
      case "isbn":
        console.log("buscare en isbn");
        break;
      default:
        console.log("buscare en title");
        break;
    }
  };

  // switch (status) {
  //   case "completed":
  //     setFilteredTodos(todos.filter((todo) => todo.completed));
  //     break;
  //   case "uncompleted":
  //     setFilteredTodos(todos.filter((todo) => !todo.completed));
  //     break;
  //   default:
  //     setFilteredTodos(todos);
  //     break;
  // }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={addBookHandler}
          value={searchedTerm}
          placeholder="Search by Title, Author or ISBN"
        />
        <select onChange={statusHandler}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="isbn">ISBN</option>
        </select>
        <AddCircleIcon onClick={() => console.log("fui clickeado")} />
      </form>
      {searchInput.triggerSearch && <SearchBook searchInput={searchInput} />}
    </>
  );
};

export default Form;
