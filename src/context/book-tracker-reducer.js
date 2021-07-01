import {
  ADD_BOOK,
  DELETE_BOOK,
  CURRENT_BOOKLIST,
} from "./book-tracker-actions";
const BookTrackerReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookLists: state.bookLists.map((bookList) =>
          bookList.listUrl === state.currentBookList
            ? {
                ...bookList,
                books: [...bookList.books, action.payload],
              }
            : bookList
        ),
      };

    case DELETE_BOOK:
      return {
        ...state,
        bookLists: state.bookLists.map((bookList) =>
          bookList.listUrl === state.currentBookList
            ? {
                ...bookList,
                books: bookList.books.filter((book) => book !== action.payload),
              }
            : bookList
        ),
      };
    case CURRENT_BOOKLIST:
      return {
        ...state,
        currentBookList: action.payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default BookTrackerReducer;
