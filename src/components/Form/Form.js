import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
    // setData(searchInput.text)
    // history.push(`/search/${selectType}`);
  };

  const statusHandler = (e) => {
    setSelectType(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={inputTextHandler}
          value={searchInput}
          placeholder="Search by Title, Author or ISBN"
        />
        <select onChange={statusHandler}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="isbn">ISBN</option>
        </select>
        <AddCircleIcon onClick={() => console.log("fui clickeado")} />
      </form>
    </>
  );
};

export default Form;
