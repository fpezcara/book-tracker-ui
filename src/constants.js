export const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BOOK_TRACKER_API_PRODUCTION
    : process.env.REACT_APP_BOOK_TRACKER_API;

export const WS_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_WSS_URL
    : process.env.REACT_APP_WS_URL;
