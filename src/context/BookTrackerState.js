import React, { useReducer, useEffect, useMemo } from "react";
import BookTrackerContext from "./book-tracker-context";
import BookTrackerReducer from "./book-tracker-reducer";

import {
  ADD_BOOK,
  DELETE_BOOK,
  CURRENT_BOOKLIST,
} from "./book-tracker-actions";

const BookTrackerState = ({ children }) => {
  const { Provider } = BookTrackerContext;

  const updateCurrentBookList = (selectedBookList) => {
    dispatch({
      type: CURRENT_BOOKLIST,
      payload: selectedBookList,
    });
  };

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
  const initialState = useMemo(() => {
    return {
      bookLists: [
        { id: 1, listUrl: "reading", listName: "Reading", books: [] },
        { id: 2, listUrl: "finished", listName: "Finished", books: [] },
        { id: 3, listUrl: "wishlist", listName: "Wishlist", books: [] },
      ],
      currentBookList: "reading",
    };
  }, []);

  const [state, dispatch] = useReducer(BookTrackerReducer, initialState);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state"))) {
      dispatch({
        type: "init_stored",
        payload: JSON.parse(localStorage.getItem("state")),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state, initialState]);

  const values = {
    state,
    addBook,
    deleteBook,
    updateCurrentBookList,
  };

  return <Provider value={values}>{children}</Provider>;
};

export default BookTrackerState;
