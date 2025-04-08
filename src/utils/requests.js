import axios from "axios";
import { API_URL } from "../constants";

export const addBookToList = async (userId, listId, book) => {
  try {
    const res = await axios.post(
      `${API_URL}/users/${userId}/lists/${listId}/add_book`,
      {
        book: book,
      },
      {
        withCredentials: true,
      },
    );

    if (res.ok) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeBookFromList = async (userId, listId, bookId) => {
  try {
    const res = await axios.delete(
      `${API_URL}/users/${userId}/lists/${listId}/remove_book`,
      {
        data: { book_id: bookId },
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    if (res.ok) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async ({
  email_address,
  password,
  password_confirmation,
}) => {
  try {
    const res = await axios.post(
      `${API_URL}/users`,
      { user: { email_address, password, password_confirmation } },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    if (res.status === 201) {
      return res?.data;
    }
  } catch (error) {
    throw error;
  }
};
