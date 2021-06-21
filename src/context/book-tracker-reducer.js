import { ADD_BOOK, DELETE_BOOK } from "./book-tracker-actions";

// ahora tengo que ver la manera de cambiar "reading" por una variable
const BookTrackerReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookLists: state.bookLists.map((bookList) =>
          bookList.listUrl === "reading"
            ? { ...bookList, books: [...bookList.books, action.payload] }
            : bookList
        ),
      };
    case DELETE_BOOK:
      return {
        ...state,
        bookLists: state.bookLists.map((bookList) =>
          bookList.listUrl === "reading"
            ? {
                ...bookList,
                books: bookList.books.filter((book) => book !== action.payload),
              }
            : bookList
        ),
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default BookTrackerReducer;
