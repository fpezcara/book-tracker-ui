import axios from "axios";
import { API_URL } from "../constants";

export const addBookToList = async (userId, listId, book) => {
  return await axios.post(
    `${API_URL}/users/${userId}/lists/${listId}/add_book`,
    {
      book: book,
    },
    {
      withCredentials: true,
    },
  );
};
xx;
