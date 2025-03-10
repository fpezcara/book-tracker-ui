export const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.BOOK_TRACKER_API_PRODUCTION
    : process.env.REACT_APP_BOOK_TRACKER_API;
