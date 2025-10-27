import React, { useReducer, useEffect, useMemo, useState } from "react";
import BookTrackerContext from "./BookTrackerContext";
import BookTrackerReducer from "./book-tracker-reducer";

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
  const { Provider } = BookTrackerContext;
  const userId = Cookies.get("userId");
  // todo: rename to bookLists
  const [error, setError] = useState({});

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

  const { isPending, data } = useQuery({
    queryKey: ["lists"],
    queryFn: () => getLists(userId),
    enabled: !!userId,
  });

  const values = {
    state,
    addBook,
    deleteBook,
    lists: data || [],
    isPending,
    error,
  };

  return <Provider value={values}>{children}</Provider>;
};

export default BookTrackerProvider;
