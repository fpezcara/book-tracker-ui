import React, { useState, createContext } from "react";

export const BookTrackerContext = createContext();

export const BookTrackerProvider = ({ children }) => {
  const [bookLists, setBookLists] = useState([
    { listUrl: "reading", listName: "Reading", books: [] },
    { listUrl: "finished", listName: "Finished", books: [] },
    { listUrl: "wishlist", listName: "Wishlist", books: [] },
  ]);
  return (
    <BookTrackerContext.Provider value={[bookLists, setBookLists]}>
      {children}
    </BookTrackerContext.Provider>
  );
};
