import React from "react";
import { ContainerForm, AddIcon } from "../../styles/Form";

const Form = ({
  searchInput,
  setSearchInput,
  setTriggerSearch,
  setSelectType,
}) => {
  // const [addedBooks, setAddedBooks] = useState([]); //despues buscar si es una buena idea hacer un estado separado con booksNowReading, booksAlreadyRead, booksWishlist

  const inputTextHandler = (e) => {
    setSearchInput(e.target.value);
    setTriggerSearch(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push(`/search/${selectType}`);
  };

  const statusHandler = (e) => {
    setSelectType(e.target.value);
  };
  // agregarle al input un onfocus o algo asi para cuando el usuario clickea afuera del input que todo desaparezca
  const handleOnBlur = (e) => {
    setTriggerSearch(false);  
  };
  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={inputTextHandler}
          onBlur={handleOnBlur}
          value={searchInput}
          placeholder="Search by Title, Author or ISBN. . ."
        />
        <select onChange={statusHandler}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="isbn">ISBN</option>
        </select>
        <AddIcon onClick={() => console.log("fui clickeado")} />
      </form>
    </ContainerForm>
  );
};

export default Form;
