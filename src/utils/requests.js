import { API_URL } from "./constants";

export const addBookToList = async (userId, listId, book) => {
  const res = await fetch(
    `${API_URL}/users/${userId}/lists/${listId}/add_book`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        book: book,
      }),
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
};

export const removeBookFromList = async (userId, listId, bookId) => {
  const res = await fetch(
    `${API_URL}/users/${userId}/lists/${listId}/remove_book`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        book_id: bookId,
      }),
    },
  );

  if (!res.ok) {
    throw res;
  }

  return res;
};

export const registerUser = async ({
  email_address,
  password,
  password_confirmation,
}) => {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      user: { email_address, password, password_confirmation },
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
};

export const logoutUser = async () => {
  const res = await fetch(`${API_URL}/session`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw res;
  }

  return res;
};

export const loginUser = async ({ email_address, password }) => {
  const res = await fetch(`${API_URL}/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ session: { email_address, password } }),
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};

export const resetPassword = async ({ email_address }) => {
  console.log("email address", email_address);
  const res = await fetch(`${API_URL}/passwords`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ user: { email_address } }),
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};
