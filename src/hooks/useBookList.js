import { useParams } from "react-router-dom";

// mejorar este hook, tal vez agregar el booklists aca porque no tiene sentido sino tengo que ir agregandolo cada vez que uso el hook
const useBookList = (bookLists) => {
  const { name } = useParams();
  return (
    bookLists &&
    bookLists.find((bookList) => {
      return bookList.listUrl === name;
    })
  );
};

export default useBookList;
