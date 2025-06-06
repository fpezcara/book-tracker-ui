const useUniqueBook = (bookLists, book, currentBookList) => {
  const curBookList = bookLists.find(
    (bookList) => bookList.listUrl || bookList.name === currentBookList,
  );

  const isBookUnique = (listedBook) => listedBook.title === book.title;

  return curBookList.books.some(isBookUnique);
};

export default useUniqueBook;
