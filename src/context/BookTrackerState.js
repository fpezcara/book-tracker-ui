import React, { useReducer, useEffect, useMemo, useState } from "react";
import BookTrackerContext from "./book-tracker-context";
import BookTrackerReducer from "./book-tracker-reducer";

import { API_URL } from "../utils/constants";
import Cookies from "js-cookie";

import {
  ADD_BOOK,
  DELETE_BOOK,
  CURRENT_BOOKLIST,
} from "./book-tracker-actions";

const BookTrackerState = ({ children }) => {
  const { Provider } = BookTrackerContext;
  const userId = Cookies.get("userId");
  // todo: rename to bookLists
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

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
    try {
      userId &&
        fetch(`${API_URL}/users/${userId}/lists`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Fetched data:", data);
            setLists(data);
            setLoading(false);
          });
    } catch (error) {
      console.error("Error fetching book lists:", error);
      setError(error);
      setLoading(false);
    }

    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state, initialState, userId]);

  const values = {
    state,
    addBook,
    deleteBook,
    updateCurrentBookList,
    lists,
    loading,
    error,
  };

  return <Provider value={values}>{children}</Provider>;
};

export default BookTrackerState;
