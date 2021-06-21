import React, { useReducer } from "react";
import BookTrackerContext from "./book-tracker-context";
import BookTrackerReducer from "./book-tracker-reducer";

import { ADD_BOOK, DELETE_BOOK } from "./book-tracker-actions";

const BookTrackerState = ({ children }) => {
  const { Provider } = BookTrackerContext;

  const addBook = (book) => {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  };
  const deleteBook = (book) => {
    dispatch({
      type: DELETE_BOOK,
      payload: book,
    });
  };

  const initialState = {
    bookLists: [
      { id: 1, listUrl: "reading", listName: "Reading", books: [] },
      { id: 2, listUrl: "finished", listName: "Finished", books: [] },
      { id: 3, listUrl: "wishlist", listName: "Wishlist", books: [] },
    ],
  };

  const [state, dispatch] = useReducer(BookTrackerReducer, initialState);

  const values = {
    bookLists: state.bookLists,
    addBook,
    deleteBook,
  };

  return <Provider value={values}>{children}</Provider>;
};

export default BookTrackerState;
