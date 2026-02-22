import React, { useReducer, useEffect, useMemo, useContext } from "react";
import BookTrackerContext from "./BookTrackerContext";
import BookTrackerReducer from "./book-tracker-reducer";
import { AuthContext } from "./AuthProvider";

import { API_URL } from "../utils/constants";
import Cookies from "js-cookie";

import {
  ADD_BOOK,
  DELETE_BOOK,
  CURRENT_BOOKLIST,
} from "./book-tracker-actions";
import { getLists } from "../utils/requests";
import { useQuery } from "@tanstack/react-query";

const BookTrackerProvider = ({ children }) => {
  const { userId } = useContext(AuthContext);
  const { Provider } = BookTrackerContext;
  // todo: rename to bookLists

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
  console.log(userId);
  const {
    isPending,
    isError,
    error: queryError,
    data,
  } = useQuery({
    queryKey: ["lists", userId],
    queryFn: () => getLists(userId),
    enabled: !!userId,
    retry: false,
  });

  const values = {
    state,
    addBook,
    deleteBook,
    lists: data || [],
    isPending,
    error: queryError,
  };

  return <Provider value={values}>{children}</Provider>;
};

export default BookTrackerProvider;
