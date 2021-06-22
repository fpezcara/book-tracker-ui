import { useParams } from "react-router-dom";

const useBookList = (bookLists) => {
  const { name } = useParams();
  return bookLists.find((bookList) => {
    return bookList.listUrl === name;
  });
};

export default useBookList;
