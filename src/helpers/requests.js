import axios from "axios";
import { API_URL } from "../constants";

export const addBookToList = async (userId, listId, book) => {
  try {
    return await axios.post(
      `${API_URL}/users/${userId}/lists/${listId}/add_book`,
      {
        book: book,
      },
      {
        withCredentials: true,
      },
    );
  } catch (error) {
    console.error(error);
  }
};

export const removeBookFromList = async (userId, listId, bookId) => {
  try {
    return await axios.delete(
      `${API_URL}/users/${userId}/lists/${listId}/remove_book`,
      {
        data: { book_id: bookId },
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
  } catch (error) {
    console.error(error);
  }
};
